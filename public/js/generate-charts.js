$(function(){
  function generateCharts(chartType, startNum, endNum, data, options) {
    
    try {
      for( i = startNum; i <= endNum; i++ ) {
        var ctx = $("#canvas" + i).get(0).getContext("2d");
        
        var NewChart = new Chart(ctx);
        options.animationSteps = 30 + 18 * i;
        
        if ( chartType === "Pie" ) {
          NewChart.Pie(data, options);
        }
        else if ( chartType === "Doughnut" ) {
          NewChart.Doughnut(data, options);
        }
      }
    }
    catch(e) {
      alert("error!");
    }
  }
  
  
  var data = [
    {
      value: 30,
      color: "#ccf600"
    },
    {
      value: 50,
      color: "#67e300"
    },
    {
      value: 100,
      color: "#ffe800"
    }
  ];
  
  var data2 = [
    {
      value: 30,
      color: "#b900f6"
    },
    {
      value: 50,
      color: "#007ff6"
    },
    {
      value: 100,
      color: "#00bff6"
    }
  ];
  
  var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    
    //Number - The width of each segment stroke
    segmentStrokeWidth: 4,
    
    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout : 50,
    
    //Boolean - Whether we should animate the chart	
    animation : true,
    
    //Number - Amount of animation steps
    animationSteps : 0,
    
    //String - Animation easing effect
    animationEasing : "easeInOutExpo",
    
    //Boolean - Whether we animate the rotation of the Pie
    animateRotate : true,
    
    //Boolean - Whether we animate scaling the Pie from the centre
    animateScale : true,
    
    //Function - Will fire on animation completion.
    onAnimationComplete : null
  };
  
  generateCharts("Pie", 1, 3, data, options);
  generateCharts("Doughnut", 4, 6, data2, options);
});