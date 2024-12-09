document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  let currentIndex = 1; // Start from the middle card (Card 2)

  // Function to update the positions and scales of the cards based on the current index
  function updateCards() {
    const totalCards = cards.length;

    cards.forEach((card, index) => {
      // Calculate the position relative to the currentIndex in a circular way
      const relativeIndex = (index - currentIndex + totalCards) % totalCards;

      if (relativeIndex === 0) {
        // Move the previous card to the top (smaller)
        card.style.transform = "translateY(-180px) scale(0.8)";
        card.style.zIndex = 1;
        card.style.opacity = "0.6";
      } else if (relativeIndex === 1) {
        // Keep the current card at the middle (larger)
        card.style.transform = "translateY(0px) scale(1.2)";
        card.style.zIndex = 2;
        card.style.opacity = "1";
      } else if (relativeIndex === 2) {
        // Move the next card to the bottom (smaller)
        card.style.transform = "translateY(180px) scale(0.8)";
        card.style.zIndex = 1;
        card.style.opacity = "0.6";
      }
    });
  }

  // Function to handle the click event and cycle through the cards
  document.querySelector(".carousel").addEventListener("click", () => {
    // Move to the next card when clicked
    currentIndex = (currentIndex + 1) % cards.length;

    updateCards();
  });

  updateCards();
});
