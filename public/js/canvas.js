window.onload = function(){
  try {
    var canvas = document.querySelector("#canvas"),
        cc = canvas.getContext("2d");
  }
  catch(e) {
    var p      = document.createElement("p"),
        canvas = document.querySelector("#canvas");
    
    p.innerText = "このコンテンツはCanvas非対応ブラウザでは表示できません。";
    
    canvas.className = "hide";
    canvas.parentNode.insertBefore(p, canvas.nextSibling);
  }
  
  
  // 円初期位置
  var x = canvas.width / 2,
      y = canvas.height / 2,
      r = 30; // 円半径
  
  // 1回の処理で進む距離（数値が低いほど滑らかに）
  var vx = 0.65,
      vy = 0.65;
  
  
  function moveCircle(){
    // 座標変更
    x += vx;
    y += vy;
    
    // 円がcanvas境界についたときにバウンドさせる（x軸）
    if ( x - r < 0 ) {
      x = r;
      vx *= -1
    }
    if ( x + r > canvas.width ) {
      x = canvas.width -r;
      vx *= -1;
    }
    // 円がcanvasの境界についたときにバウンドさせる（y軸）
    if ( y - r < 0 ) {
      y = r;
      vy *= -1;
    }
    if ( y + r > canvas.height ) {
      y = canvas.height - r;
      vy *= -1;
    }
    
    cc.save();
    
    cc.beginPath();
    cc.clearRect(0, 0, canvas.width, canvas.height); // 再描画するために全体を削除
    
    cc.restore();
    cc.beginPath();
    
    cc.strokeStyle = "#0097f6";
    cc.fillStyle = "#0097f6";
    cc.arc(x, y, r, 0, Math.PI * 2, false);
    
    cc.fill();
    cc.stroke();
    cc.restore();
    
    // 処理を0.001秒後にループ
    setTimeout( moveCircle, 1);
  };
  
  moveCircle();
};