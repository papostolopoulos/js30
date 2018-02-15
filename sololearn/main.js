console.log("JS is connected to the html page");
// window.onload = function(){
//
// }

// Selecting elements 1
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(){
    alert("The text you entered was: " + inputTag.value);
  });

//Selecting elements 2
  var codeButton = document.getElementById("codeButton");
  codeButton.addEventListener("click", function () {
    var code = document.getElementsByTagName("code");
    for (var i = 0; i < code.length; i++) {
      console.log(code[i]);
    }
  });

// Working with DOM
var buttonWorkingWithDom = document.getElementById("buttonWorkingWithDom");
buttonWorkingWithDom.addEventListener("click", function () {
  var divExampleWorkingWithDom = document.getElementById("divExampleWorkingWithDom");
  var workingWithDomNodes = divExampleWorkingWithDom.childNodes

  var inputWorkingWithDom = document.getElementById("inputWorkingWithDom");

  for (var i = 0; i < workingWithDomNodes.length; i++) {
    if (workingWithDomNodes[i].nodeName === "P") {
      workingWithDomNodes[i].innerHTML = inputWorkingWithDom.value;
    }
  }
});

// Changing Attributes
var buttonChangeAttribute = document.getElementById("buttonChangeAttribute");
buttonChangeAttribute.addEventListener("click", function () {
var imgChangeAttribute = document.getElementById("imgChangeAttribute");
imgChangeAttribute.src === "https://media-cdn.tripadvisor.com/media/photo-s/07/0c/68/d4/aegli-1876.jpg"?imgChangeAttribute.src = "https://media-cdn.tripadvisor.com/media/photo-s/06/8e/b9/77/captain-sifakis.jpg" :imgChangeAttribute.src = "https://media-cdn.tripadvisor.com/media/photo-s/07/0c/68/d4/aegli-1876.jpg";
});

// Changing styles
var buttonChangeStyle = document.getElementById("buttonChangeStyle");
buttonChangeStyle.addEventListener("click", function () {
  var divCodeChangeStyle = document.getElementById("divCodeChangeStyle");
  // Ternary operator format
  // divCodeChangeStyle.style.backgroundColor === "rgb(102, 204, 255)" ? divCodeChangeStyle.style = "background-color: pink; border-color: red":     divCodeChangeStyle.style = "background-color: #66ccff; border-color: blue"
  if (divCodeChangeStyle.style.backgroundColor === "rgb(102, 204, 255)") {
    divCodeChangeStyle.style = "background-color: pink; border-color: red"
  }
  else {
    divCodeChangeStyle.style = "background-color: #66ccff; border-color: blue"
  }
  // Alternative way to write the line above:
  // divCodeChangeStyle.style.backgroundColor = "#66ccff";
  // divCodeChangeStyle.style.borderColor = "blue";
});

// Creating Elements
var buttonCreatingElements = document.getElementById("buttonCreatingElements");
buttonCreatingElements.addEventListener("click", function () {
  var inputCreatingElements = document.getElementById("inputCreatingElements");
  var paragraphCreateElement = document.createElement("p");
  var textValueCreateElement = document.createTextNode(inputCreatingElements.value);
  console.log(inputCreatingElements.value);
});
