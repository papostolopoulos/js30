console.log("JS is connected to the html page");


window.onload = function(){

var inputTag = document.getElementById("inputTag");
console.log(inputTag);


  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(){
    console.log("submit button was clicked");
    console.log(inputTag);
  });








}
