
$(function () {
    $("#shop").load("shop.html");
    $("#shop-detail").load("shop-detail.html");
    $("#shopping-card").load("shopping-card.html");
    $("#product-detail").load("product-detail.html");
    $("#contact").load("contact.html");

});
const menu = document.querySelector(".menu-sp")
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", function () {
    menu.classList.toggle("is-show")
});
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
    if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
        menu.classList.remove("is-show")
    }
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.fied').show();
    }
    else {
        $('.fied').hide()
    }

})
$('.fied').click(function () {
    $(window).scrollTop(0);
})
$('input').hide();
