(function ( $ ) {
    $.fn.graphology = function(options) {
        var settings = $.extend({
            // These are the defaults.
            type: 'barH',
            height:300,
            width:400,
            colors:['red','blue','orange'],
            data: [0,0,0,0,0,0],
            class:''
        }, options );

        var startSvg = '<svg class="chart" height="'+settings.height+'" width="'+settings.width+'">';
        var endSvg = '</svg>';

        function createChart(settings){
          switch(settings.type) {
              case 'barH':
                  var chart = barH(settings);
                  return chart;
                  break;
              case 'barV':
                  var chart = barV(settings);
                  return chart;
                  break;
              case 'pie':
                  var chart = pie(settings);
                  return chart;
                  break;
              default:
                  barH(settings);
          }
        }

        function barH(settings){
          bars = settings.data.length;
          barmax = Math.max.apply(null,settings.data);
          build = '';
          space = 0;
          pointW = settings.width / barmax;
          for(i=0; i<bars; ++i){
            barW = pointW * settings.data[i];
            barH = (settings.height / bars )-1;
            textW = barW - 30;
            build = build+'<g transform="translate(0,'+space+')"><rect fill="'+settings.colors[i]+'" class="bar-horizontal '+settings.class+'" width="'+barW+'" height="'+barH+'" data-width="'+barW+'"></rect><text x="'+textW+'" y="15.5" dy=".35em">'+settings.data[i]+'</text></g>';
            space = space + barH + 1;
          }
          return build;
        }

        function barV(settings){
          bars = settings.data.length;
          base = (parseInt(settings.height));
          barmax = Math.max.apply(null,settings.data);
          build = '';
          space = 0;
          pointH = settings.height / barmax;
          for(i=0; i<bars; ++i){
            barH = (pointH * settings.data[i]);
            barW = (settings.width / bars )-1;
            barT = base-barH;
            textH = barT;
            build = build+'<g transform="translate('+space+','+barT+')"><rect fill="'+settings.colors[i]+'" class="bar-vertical '+settings.class+'" width="'+barW+'" height="'+barH+'" data-height="'+barH+'"></rect><text x="8.5" y="'+20+'" dx=".35em">'+settings.data[i]+'</text></g>';
            space = space + barW + 1 ;
          }
          return build;
        }


        function pie(settings){
          wedges = settings.data.length;
          centerX = settings.width / 2;
          centerY = settings.height / 2;
          wedgeTotal = barSum(settings.data);
          build = '';
          space = 0;
          pointW = settings.width / barmax;
          rx = centerX*.8;
          ry = 0; //centerY*.8;
          lx = 0;
          ly = 0;
          ax = 0;
          ay = 0;
          for(i=0; i<bars; ++i){
            barW = pointW * settings.data[i];
            barH = (settings.height / bars )-1;
            textW = barW - 30;
            rx = centerX*.8;
            ry = centerY*.8;
            lx = 0;
            ly = 0;
            ax = 0;
            ay = 0;

            build = build+' <path fill="#61C0BF" d="M'+centerX+','+centerY+' Lrx,ry Arx,150 1 0,1 196.317, 33.6827 z"></path>';
            space = space + barH + 1;
          }
          return build;
        }


        function barSum(data){
          var points = data.length;
          var sum = 0;
          for(i=0; i<points; ++i){
            sum = sum+data[i];
          }
          return sum;
        }

        var buildSvg = createChart(settings);


        var svg = startSvg + buildSvg + endSvg;
        // return chart to page
        return this.html(svg);
    };

}( jQuery ));
