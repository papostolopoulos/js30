console.log("JS is connected to the html page");
// window.onload = function(){
//
// }

// Selecting elements 1
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(){
    console.log("submit button was clicked");
    alert("The text you entered was: " + inputTag.value);
  });

//Selecting elements 2
  var codeButton = document.getElementById("codeButton")
  codeButton.addEventListener("click", function () {
    var code = document.getElementsByTagName("code");
    for (var i = 0; i < code.length; i++) {
      console.log(code[i]);
    }
  });

// Working with DOM
