// $('.autumn.leaf')
//   .transition('fade up')
// ;

// 漢堡選單按鈕轉換

$(document).ready(function() {
  $('.container').on('click',function() {
    $('.menu').show();
    $(this).toggleClass("change");
    
    $(this).hasClass('change')?$('.menu').slideDown():$('.menu').slideUp();
  })
});

$(window).