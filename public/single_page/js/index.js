/*
 * SinglePage v1.0
 * MIT License
 */

$(function(){
  //* init *//
  var $wrapper  = $("#wrapper"),
      $loading  = $("#loading"),
      $header   = $("header"),
      $body     = $("body"),
      $ms       = $("#measure"),
      $wpSec    = $("div.wpSec"),
      $children = $wpSec.children(),
      $wd       = $(window);
      
      $children.fadeTo(0, 0).css("visibility","hidden");                      // 各セクションの見出しと文章の高さ情報を維持したまま隠す
      $("#sec1st h1, #sec1st p").fadeTo(0, 1).css("visibility", "visible");   // ファーストビューの要素は除外
  
  //* init for scrollWithFade() *//
  var childPos  = "",
      userPos   = "",
      diff      = "",
      division  = "";
  
  
  //* functions *//
  function getMargin() {            // ウィンドウの高さだけ 2つめのセクションにマージンを設ける
    $("#sec2nd").css("margin-top", $wd.height());
  }
  
  function popHeader() {            // 一定スクロールでヘッダー表示・非表示
    if ( $body.scrollTop() > 800) {
      $header.removeClass("popOut").addClass("popIn");
    }
    else {
      $header.removeClass("popIn").addClass("popOut");
    }
  }
  
  function loadingAnimation() {    // 画像をすべて読み込むまでページを隠す
    $wrapper.css( { "overflow": "hidden", "height": 0 } );
    $loading.css("display", "block");
    
    $body.imagesLoaded( function(){
      $wrapper.css( { "overflow": "auto", "height": "auto" } );
      $loading.fadeTo(2000, 0);
    });
  }
  
  function scrollWithFade() {      // 現在位置から判別して要素をフェード
    $children.each( function(){
      childPos   = $(this).offset().top;
      userPos    = $wd.scrollTop() + $wd.height();
      diff       = userPos - childPos;              // 現在位置と要素の位置を比較した差分
      
      division   = diff / 30;                       // 分母の数値を変えればフェードのタイミングが調整可能
      division   = Math.floor(division);            // 切り捨て
      division   = division / 10;                   // 0.x 形式にしてopacityの引数にする
      
      if ( division >= 0.1 ) {  
        $(this).css( { "visibility": "visible", "opacity": division } );
      }
      else {
        $(this).css( { "visibility": "visible", "opacity": 0 } );
      }
    });
  }
  
  function pageTop() {
    $("html,body").animate({ scrollTop: 0 }, 400);
  }
  
  function resize_for_android() {    // viewport 指定が効かない Android端末用
    if (navigator.userAgent.indexOf('Android') > 0){
      $("html").css("zoom" , $(window).width()/320 )
    }
  }
  
  
  //* exec *//
  popHeader();
  getMargin();
  resize_for_android();
  loadingAnimation();
  
  $("#pageTop").click(pageTop);
  
  $wd.on("scroll", function(){
    
    popHeader();
    scrollWithFade();
  
  }).on("resize", getMargin);
  
  
  //* debug *//
  /*
  var $ms       = $("#measure");
  function measure() {              // scrollTop および ウィンドウの高さを取得
    $ms.html( "ScrollTop: " + $body.scrollTop() + "<br />WindowWidth: " + $wd.width() + "<br />WindowHeight: " + $wd.height() );
  }
  measure();
  $wd.on("scroll resize", measure);
  */
});