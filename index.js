var button = document.querySelector("#starGame");

button.addEventListener("click", function () {

  var dice1 = dice();
  var dice2 = dice();

  var element1 = document.getElementById("img1");
  var element2 = document.getElementById("img2");


  function dice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  var result;

  if (dice1 > dice2) {
    result = "Player 1 Wins";
  } else if (dice1 < dice2) {
    result = "Player 2 Wins"
  } else if (dice1 === dice2) {
    result = "It was draw"
  }

  if (document.getElementById("title").innerHTML === "Parcheesi") {
    document.getElementById("title").innerHTML = "Parcheesi";
  } else if (document.getElementById("title").innerHTML === "MONOPOLY") {
    document.getElementById("title").innerHTML = "MONOPOLY";
  } else {
    document.getElementById("title").innerHTML = result;
  }

  console.log(dice1, dice2);

  addImage(dice1, element1);
  addImage(dice2, element2);

  function addImage(diceValue, element) {

    switch (diceValue) {

      case 1:
        element.src = "../images/dice1.png";
        break;

      case 2:
        element.src = "../images/dice2.png";
        break;

      case 3:
        element.src = "../images/dice3.png";
        break;

      case 4:
        element.src = "../images/dice4.png";
        break;

      case 5:
        element.src = "../images/dice5.png";
        break;

      case 6:
        element.src = "../images/dice6.png";
        break;

      default:
        break;
    }
  }



});