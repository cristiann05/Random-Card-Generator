window.onload = function() {
  randomCard();
  setInterval(randomCard, 10000); // Cambia la carta cada 10 segundos
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

function updateCardDimensions() {
  const width = document.getElementById('cardWidth').value;
  const height = document.getElementById('cardHeight').value;
  
  //si los inputs no están vacíos y son mayores que 0
  if (width && height && width > 0 && height > 0) {
    const card = document.querySelector('.card');
    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
  } else {
    alert('Please enter valid positive numbers for width and height.');
  }
}

document.getElementById('changeinputs').addEventListener('click', updateCardDimensions);
