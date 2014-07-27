$(function(){
  // forked from __ikke__'s "Canvas うえいぶ" http://jsdo.it/__ikke__/cHiG
  
  try {
    var $canvas = $("#canvas"),
        cc = canvas.getContext("2d");
  }
  catch(e) {
    var $canvas = $("#canvas"),
        p      = document.createElement("p");
    
    p.innerText = "このコンテンツはCanvas非対応ブラウザでは表示できません。";
    
    $canvas.className = "hide";
    $canvas.parentNode.insertBefore( p, $canvas.nextSibling );
  }
  
  
  /* Init Settings */
  var waveCount = 150,  // ループ処理の回数
      amplitude = 4;    // 振幅
      calc      = canvasCalc();
      w         = calc.w;
      h         = calc.h;
  
  
  /* Exec */
  setInterval( drawingWave, 20 );
  
  /* ReCalc canvas width and height when window is resized. */
  $(window).on("resize", function(){
    calc = canvasCalc();
    w   = calc.w;
    h   = calc.h;
  });
  
  
  /* functions */
  function drawingWave() {
      var prevX = 0,
          prevY = 0;
      
      cc.strokeStyle = "#9acfc2";
      cc.fillStyle   = "#9acfc2";
      cc.clearRect(0, 0, w, h);
      cc.beginPath();
      cc.moveTo(0, h);
      cc.lineTo(0, h / 2);

      for ( var i = 0; i <= waveCount; i++ ) {
        var xx = i * (w / waveCount),             // x軸移動範囲（ 最終的に x = waveCount となるため、ループをすべて回し切ると 0 〜 window幅 移動できる）
            yy = sinCalc(i) * amplitude + h / 2,  // y軸移動範囲（ Canvasの高さ中心を基準点に sin（0〜1）* 振幅 の範囲で移動する）
            cx = prevX + (xx - prevX) / 2,        // quadraticCurve の x点（ x軸上で prevX -> xx まで移動した距離における中間点 ）
            cy = prevY + (yy - prevY) / 2;        // quadraticCurve の y点（ y軸上で prevY -> yy まで移動した距離における中間点 ）
        
        cc.quadraticCurveTo( cx, cy, xx, yy );
        
        prevX = xx;
        prevY = yy;
      }
      
      cc.lineTo(w, h);
      cc.lineTo(0, h);
      cc.closePath();
      cc.fill();
  }
  
  
  var k = 0;
  
  function sinCalc(i) {
    var sin = 2 * Math.sin( i * Math.PI / 180 + k );
    k += 0.00025;
    
    return sin;
  }
  
  
  function canvasCalc() {
    var windowWidth  = $(this).width();
    var windowHeight = $(this).height(); // Canvasの高さをウィンドウ全体に広げたい場合
    var fixedHeight  = 300;              // Canvasの高さを指定の値に固定したい場合
    
    $canvas.attr( "width", windowWidth ).attr( "height", fixedHeight );
    return { w: windowWidth, h: fixedHeight };
  }
});