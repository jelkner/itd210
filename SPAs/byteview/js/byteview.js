/* byte.js */
window.onload = init;

function init() {
  const button = document.getElementById('inputButton');
  button.onclick = handleButtonClick;
  addValidation();
}

function addValidation() {
  const loc = window.location.href;
  let HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
  let CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                        loc + '?profile=css3';
  document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
  document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
}

function handleButtonClick(e) {
  const number = document.getElementById("numberInput").value;
  const outputP = document.getElementById("output");
  let outStr = "";

  outStr += "Your number, " + number + ", is in range. Thanks!";
  outputP.innerHTML = outStr;
}
