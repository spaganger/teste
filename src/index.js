jQuery(document).ready(function() {
  if (jQuery(window).width() < 900) {
    $("#container").click(function() {
      $(".sideBar").addClass("visible");
      $(".mainPaper").addClass("main");
      $(".sideBar").animate({ width: "toggle" });
    });
  }
  
  $(".check").click(function() {
    $(".check").toggleClass("weight");
  });
  $(".check").click(function() {
    $(".checklist").toggle();
  });
  $(".colab").hover(function(){
       $(".pos-icon1").addClass('textColab')
  });
  $(".colab").mouseleave(function(){
    $(".pos-icon1").removeClass('textColab')
});
$(".cursos").hover(function(){
  $(".pos-icon2").addClass('textColab')
});
$(".cursos").mouseleave(function(){
  $(".pos-icon2").removeClass('textColab')
});
});
