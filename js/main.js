var elOpenMenu = document.querySelector(".button")
var elOpenList = document.querySelector(".sitenav")
var elCloseBtn = document.querySelector(".button-close")
var elOverly = document.querySelector(".overly")

elOpenMenu.addEventListener("click", function(){
    elOpenList.classList.toggle("show-block");
    elOpenMenu.classList.toggle("button-close");
    elOverly.classList.toggle("overly-style");
});
