// $('.autumn.leaf')
//   .transition('fade up')
// ;

// 漢堡選單按鈕轉換

$(document).ready(function() {
  $('.container').on('click',function() {
    $(this).toggleClass("change");
    // $(this).preventDefault(); //這邊用不到停止事件
    
    $(this).hasClass('change')?$('.menu').slideDown():$('.menu').slideUp();
  })
});