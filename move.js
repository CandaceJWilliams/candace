$(document).ready(function($){
            $("body").mousemove(function(e){
                var mouseX = e.pageX - $('body').offset().left;
                var mouseY = e.pageY - $('body').offset().top;
                var totalX = $('body').width();
                var totalY = $('body').height();
                var centerX = totalX / 2;
                var centerY = totalY / 2;
                var shiftX = centerX - mouseX;
                var shiftY = centerY - mouseY;

                var startX = ($('body').width() / 2) - ($('.display').width() / 2);
                var startY = ($('body').height() / 2) - ($('.display').height() / 2);

                var finalX = ((((startX + (shiftX / 10)) / totalX)) * 100 + 119) + '%';
          
                var finalY = ((((startY + (shiftY / 10)) / totalY)) * 100 + 64) + '%';
               

                $('.display').css({ 'left': (shiftX/20) + 'px', 'top': (shiftY/20) + 'px' });

                // $('.display').css({"transform":"translate(finalX + %, finalY + %)"});
                // console.log('finalY');
                // console.log('finalX');
            });
        });

$(document).ready(function($){
            $("body").mousemove(function(e){
                var mouseX = e.pageX - $('body').offset().left;
                var mouseY = e.pageY - $('body').offset().top;
                var totalX = $('body').width();
                var totalY = $('body').height();
                var centerX = totalX / 2;
                var centerY = totalY / 2;
                var shiftX = centerX - mouseX;
                var shiftY = centerY - mouseY;

                var startX = ($('body').width() / 2) - ($('.display2').width() / 2);
                var startY = ($('body').height() / 2) - ($('.display2').height() / 2);

                var finalX = ((((startX + (shiftX / 10)) / totalX)) * 100 + 119) + '%';
          
                var finalY = ((((startY + (shiftY / 10)) / totalY)) * 100 + 64) + '%';
               

                $('.display2').css({ 'left': (shiftX/10) + 'px', 'top': (shiftY/10) + 'px' });
            });
        });





