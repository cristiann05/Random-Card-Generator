window.onload = function() {
  randomCard();
};

function randomCard() {
  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "A", "Q"];
  const suits = ["♦", "♥", "♠", "♣"];
  const suitColors = {
    "♦": "red",
    "♥": "red",
    "♠": "black",
    "♣": "black"
  };

  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  const randomSuitIndex = Math.floor(Math.random() * suits.length);

  const randomNumber = numbers[randomNumberIndex];
  const randomSuit = suits[randomSuitIndex];
  const suitColor = suitColors[randomSuit];

  document.getElementById("number").textContent = randomNumber;
  document.getElementById("topSuit").textContent = randomSuit;
  document.getElementById("bottomSuit").textContent = randomSuit;

  document.getElementById("topSuit").style.color = suitColor;
  document.getElementById("bottomSuit").style.color = suitColor;

}

document.getElementById("reloadButton").addEventListener("click", function() {
  randomCard();
});