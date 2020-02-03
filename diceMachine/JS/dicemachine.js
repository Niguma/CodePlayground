//---D4---//
function rollD4() {
  var d4 = Math.floor(Math.random() * 4 + 1);
  resultArea.innerHTML = d4;
  console.log("D4roll result is: " + d4);
}

//--D6--//
function rollD6() {
  var d6 = Math.floor(Math.random() * 6 + 1);
  resultArea.innerHTML = d6;
  console.log("D6roll result is: " + d6);
}

//--D8--//
function rollD8() {
  var d8 = Math.floor(Math.random() * 8 + 1);
  resultArea.innerHTML = d8;
  console.log("D8roll result is: " + d8);
}

//--D10--//
function rollD10() {
  var d10 = Math.floor(Math.random() * 10 + 1);
  resultArea.innerHTML = d10;
  console.log("D10roll result is: " + d10)
}

//--D20--//
function rollD20() {
  var d20 = Math.floor(Math.random() * 20 + 1);
  resultArea.innerHTML = d20;
  console.log("D20roll result is: " + d20)
}



