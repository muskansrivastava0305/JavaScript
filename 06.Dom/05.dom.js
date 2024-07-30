//----------------Accessing DOM Elements----------------------------

var element = document.getElementById("myElementId");
var elements = document.getElementsByClassName("myClassName");
var elements = document.getElementsByTagName("div");
var element = document.querySelector(".myClassName");
var elements = document.querySelectorAll(".myClassName");


//---------------Manipulating DOM Elements(Changing Content)--------
element.innerHTML = "<p>New Content</p>";
element.innerText = "New Text";
element.textContent = "New Text";

//-----------------Changing Attributes------------------------------
var value = element.getAttribute("href");
element.setAttribute("src", "newImage.jpg");
element.removeAttribute("class");

//----------------Changing Styles----------------------------------
element.style.color = "blue";
element.style.fontSize = "20px";

//-------------Adding and Removing Elements-------------------------
var newElement = document.createElement("div");
var parentElement = document.getElementById("parent");
parentElement.appendChild(newElement);
parentElement.removeChild(newElement);
parentElement.insertBefore(newElement, referenceElement);

//----------Events handling----------------------------------------
element.addEventListener("click", function() {
    alert("Element clicked!");
});

