"use strict";

var sideMenu = document.querySelector("aside");
var menuBtn = document.querySelector("#menu-btn");
var closeBtn = document.querySelector("#close-btn");
var themeToggler = document.querySelector(".theme-toggler");
menuBtn.addEventListener('click', function () {
  sideMenu.style.display = 'block';
}); // close sidebar

closeBtn.addEventListener('click', function () {
  sideMenu.style.display = 'none';
});
themeToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
}); //for the orders in table

Orders.forEach(function (order) {
  var tr = document.createElement('tr');
  var trContent = tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});