
console.log(window.location.hostname);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open(
  "GET",
  "http://localhost:3000/api/ads?url=devnhanhgonle.myharavan.com",
  true
);
xhttp.send();
function openPopup() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "xmlhttp_info.txt", true);
  xhttp.send();


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
    '<div id="popup" style="margin: 0 auto;  position: fixed;width: 750px; height:460px;z-index: 9999999;display: flex;align-items: center;justify-content: center;;none;top:100px;left:300px;background-color: #fff;  border: 1px solid #ddd;  border-radius: 5px;  box-shadow: 0 2px 8px #aaa;  overflow: hidden;"><span style=" float:right;cursor: pointer;font-weight: bold;position: absolute;right: 9px;top: 5px; font-size:24px; color:white;" onClick="closePopup()">X</span><a target="_blank" href="/collections/xa-hang-ton-kho"><img src="https://i.imgur.com/fBcfDGX.png"/></a></div>';
  const html =
    '<div id="popup" style="margin: 0 auto;  position: relative;width: 750px; height:460px;z-index: 999;display: none;top:0;background-color: #fff;  border: 1px solid #ddd;  border-radius: 5px;  box-shadow: 0 2px 8px #aaa;  overflow: hidden;"><span style=" float:right;cursor: pointer;font-weight: bold;position: absolute;right: 9px;top: 5px; font-size:24px; color:white;" onClick="closePopup()">X</span><a target="_blank"  href="/collections/xa-hang-ton-kho"><img src="https://i.imgur.com/fBcfDGX.png"/></a></div>';

  // add the newly created element and its content into the DOM
  document.body.insertBefore(newDiv, document.body.childNodes[0]);

  // open popup onload
  openPopup();
}
const expire = localStorage.getItem("expire");
console.log(new Date().getTime() / 1000 + 86400);
if (!expire || Date.now() > expire) {
  addElement();
  localStorage.setItem("expire", new Date().getTime() / 1000 + 86400); //1day
}
