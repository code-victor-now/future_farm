function getRandomNumber() {
    return (Math.random() * (7 - 1) + 1).toFixed(2);
  }
  
  setInterval(function() {
    var randomNumber = getRandomNumber();
    var numberDisplay = document.querySelector('#number-display');
    numberDisplay.textContent = randomNumber;

    if (randomNumber > 5.5) {
        // Activate the acidic pump
        console.log("Ativando bomba ácida");
      } else if (randomNumber < 5.5) {
        // Activate the alkaline pump
        console.log("Ativando bomba Alcalina");
      } else {
        // Do nothing
      }

  }, 2000); // 5000 milliseconds = 5 seconds