$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var currentScore = 0;


  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var randomNumber = getRandomNumber(19, 120);

  $("#randomNumber").html(randomNumber);

  var greenCrystal = getRandomNumber(1, 12);
  var yellowCrystal = getRandomNumber(1, 12);
  var blueCrystal = getRandomNumber(1, 12);
  var redCrystal = getRandomNumber(1, 12);

  var newValues = function() {
    greenCrystal = getRandomNumber(1, 12);
    yellowCrystal = getRandomNumber(1, 12);
    blueCrystal = getRandomNumber(1, 12);
    redCrystal = getRandomNumber(1, 12);
  };

  // $("#current-score").html(currentScore);

  $("#green-crystal").on("click", function() {
    currentScore += greenCrystal;
    $("#current-score").html(currentScore);
    updateScore();
  });

  $("#yellow-crystal").on("click", function() {
    currentScore += yellowCrystal;
    $("#current-score").html(currentScore);
    updateScore();
  });

  $("#blue-crystal").on("click", function() {
    currentScore += blueCrystal;
    $("#current-score").html(currentScore);
    updateScore();
  });

  $("#red-crystal").on("click", function() {
    currentScore += redCrystal;
    $("#current-score").html(currentScore);
    updateScore();
  });

  var updateScore = function() {
    if (randomNumber === currentScore) {
      wins++;
      $("#wins").html(wins);
      $("#randomNumber").empty();
      randomNumber = getRandomNumber(19,120);
      $("#randomNumber").html(randomNumber);
      currentScore = 0;
      $("#current-score").html(currentScore)
      newValues();
    }
    if (randomNumber < currentScore) {
      losses++;
      $("#losses").html(losses);
      $("#randomNumber").empty();
      randomNumber = getRandomNumber(19,120);
      $("#randomNumber").html(randomNumber);
      currentScore = 0;
      $("#current-score").html(currentScore)
      newValues();
    }

  }

});
