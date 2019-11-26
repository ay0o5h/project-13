$(document).ready(function(){
    //navbar
    $(".header li ").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})