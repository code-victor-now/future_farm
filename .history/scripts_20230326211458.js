function getRandomNumber() {
    return (Math.random() * (7 - 1) + 1).toFixed(2);
  }
  
  setInterval(function() {
    var randomNumber = getRandomNumber();
    var numberDisplay = document.querySelector('#ph-display');
    numberDisplay.textContent = randomNumber;
    
    if (randomNumber > 5.5) {
      // Activate the acidic pump
      console.log("Activating acidic pump");
    } else if (randomNumber < 5.5) {
      // Activate the alkaline pump
      console.log("Activating alkaline pump");
    } else {
      // Do nothing
    }
  }, 5000); // 5000 milliseconds = 5 seconds