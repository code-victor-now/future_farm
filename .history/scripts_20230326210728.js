function getRandomNumber() {
    return (Math.random() * (7 - 1) + 1).toFixed(2);
  }
  
  setInterval(function() {
    var randomNumber = getRandomNumber();
    var numberDisplay = document.querySelector('#number-display');
    numberDisplay.textContent = randomNumber;
  }, 5000); // 5000 milliseconds = 5 seconds