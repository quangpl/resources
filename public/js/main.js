function openPopup() {
  var el = document.getElementById("popup");
  el.style.display = "block";

  // Updates: set window background color black
  document.body.style.background = "#353333";
}

function closePopup() {
  var el = document.getElementById("popup");
  el.style.display = "none";
  document.body.style.background = "white";
}

function addElement() {
  // create a new div element
  // and give it popup content
  var newDiv = document.createElement("div");
  newDiv.innerHTML +=
    '<div id="popup" style="margin: 0 auto;  position: relative;width: 750px; height:430px;z-index: 999;display: none;top:0;background-color: #fff;  border: 1px solid #ddd;  border-radius: 5px;  box-shadow: 0 2px 8px #aaa;  overflow: hidden;"><span style=" float:right;cursor: pointer;font-weight: bold;position: absolute;right: 9px;top: 5px; font-size:24px; color:white;" onClick="closePopup()">X</span><a target="_blank" href="https://google.vn"><img src="https://i.imgur.com/tgFmFXp.png"/></a></div>';

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("main_container");
  document.body.insertBefore(newDiv, currentDiv);

  // open popup onload
  openPopup();
}
const expire = localStorage.getItem("expire");
console.log();

if (!expire || expire > Date.now()) {
  document.body.onload = addElement;
  localStorage.setItem("expire", new Date().getTime() / 1000 + 86400); //1day
}
