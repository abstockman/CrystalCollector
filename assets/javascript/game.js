$(document).ready(function() {

  var randomNumber = getRandomNumber(19,120);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $("#randomNumber").html(randomNumber);

  

});
