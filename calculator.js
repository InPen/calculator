document.getElementById("click").onclick = add2;

function add2 (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
 console.log(userInput+userInput2);
 document.getElementById("result").innerHTML = userInput+userInput2;

}

document.getElementById("subtract").onclick = subtract;

function subtract (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
  console.log(userInput-userInput2);
  document.getElementById("result").innerHTML = userInput-userInput2;

}

document.getElementById("multiply").onclick = multiply;

function multiply (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
  console.log(userInput*userInput2);
  document.getElementById("result").innerHTML = userInput*userInput2;

}

document.getElementById("divide").onclick = divide;

function divide (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
  console.log(userInput/userInput2);
  document.getElementById("result").innerHTML = userInput/userInput2;

}
