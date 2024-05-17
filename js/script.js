$(document).ready(function(){

    /* Change Bacgorund Navbar When You Scroll */
    const root_theme = document.querySelector(":root");
    $(window).on("scroll",function(){
        let scroll = $(window).scrollTop();
        if (scroll > 450){
            $("nav").addClass("stickyadd");
            root_theme.style.setProperty('--white-color', '#000');
            $("nav .navbar-nav .nav-item a").css("color","#000");
        }else{
            $("nav").removeClass("stickyadd");
            root_theme.style.setProperty('--white-color', '#fff');
            $("nav .navbar-nav .nav-item a").css("color","#fff");

        }
        scrollUp()
    });
    /* Show And Hide Arrow Up To ScrollUP */
    function scrollUp(){
        if(document.documentElement.scrollTop > 400){
            $(".scroll-up").css("display","block");
        } else{
            $(".scroll-up").css("display","none");
        }
    };

    /* Go Up */
    $(".scroll-up").click(function(){
        document.documentElement.scrollTop = 0;
    });

})