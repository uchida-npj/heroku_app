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
  
  
  var img = new Image();
  img.src = "../../images/rain/leaf.png";
  
  img.onload = function(){
    cc.beginPath();
    cc.strokeStyle = "transparent";
    
    var ptn = cc.createPattern(img, "repeat");
    cc.fillStyle = ptn;
    
    cc.arc(canvas.width/2, canvas.height/2 +5, 20, - Math.PI * 1/4, Math.PI * 5/4, false);
    cc.lineTo(canvas.width/2, canvas.height/2 -25);
    cc.fill();
  }
};