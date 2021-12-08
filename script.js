let slide_image = document.querySelectorAll('.slide_image');
let top_menu_close = document.getElementById('top_menu_close');
let hamburger_button = document.getElementById('hamburger_button');
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide_image");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


hamburger_button.addEventListener('click', function () {

    document.getElementById('mobile_nav_bar_container').style.display = 'block';
    hamburger_button.style.display = 'none';

})
top_menu_close.addEventListener('click', function () {
    document.getElementById('mobile_nav_bar_container').style.display = 'none';
    console.log('dfdf');
    hamburger_button.style.display = 'block';

})