//const preloader = document.querySelector('.preloader');
//
//const fadeEffect = setInterval(() => {
//  // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
//  if (!preloader.style.opacity) {
//    preloader.style.opacity = 1;
//  }
//  if (preloader.style.opacity > 0) {
//    preloader.style.opacity -= 0.1;
//  } else {
//    clearInterval(fadeEffect);
//  }
//}, 200);
//
//window.addEventListener('load', fadeEffect);
//
//window.onload = function(){
//        //hide the preloader
//        document.querySelector(".preloader").style.display = "none";
//}
//
//jQuery(document).ready(function ($) {
//    $(window).load(function () {
//        setTimeout(function(){
//            $('.preloader').fadeOut('fast', function () {
//            });
//        },1000); // set the time here
//    });  
//});

window.onload = function(){
    setTimeout(function(){
            document.querySelector(".preloader").style.display = "none";
    },1500); 
        //hide the preloader  
}

//jQuery(document).ready(function ($) {
//    $(window).load(function () {
//        $('.preloader').fadeOut('slow', function () {
//            $(this).remove();
//        });
//    });
//
//});
