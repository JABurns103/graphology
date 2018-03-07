$(document).ready(function(){
    var data = [4,28,15,16,23,12];
    var data2 = [4,28,15,16,23,12,22,5,32,18,12,22,7,6];
    $(".newSVG").graphology({
      type: 'barH',
      height:200,
      width:500,
      colors:['red','blue','green','purple','gray','orange'],
      data: data
    });
    $(".newSVG2").graphology({
      type: 'barV',
      colors:['red','blue','green','purple','gray','orange'],
      data: data2,
      class: 'yep'
    });
    $(".pieChart").graphology({
      type:'pie',
      colors:['red','blue','green','purple','gray','orange'],
      data: data,
      height:300,
      width:300,
      class: 'yep'
    });

    $(".animate").click(function(){
      /*$(".bar-horizontal").each(function(){
        var w = parseInt($(this).attr('width'));
        var dw = parseInt($(this).data('width'));
          $(this).animate({ width: dw },{ duration: 2000, step: function(now) { $(this).attr("width", now); }},'swing');
      });*/
      //$('svg').animate({ height: 500, width:800},{ duration: 2000, step: function(now) { $(this).attr("height", now); }},'swing');
    });

});
