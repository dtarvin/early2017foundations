$("li").mouseenter(function(){
               var x = $(this).offset().left;
                console.log("The left side is "+x);
                var wth = $(this).width();
                console.log("The width is "+wth);
                var pawMove = x + (wth/2);
                $("#paw").css("display", "inline");
                $("#paw").animate({
                   left: pawMove,
                    "transform": "translate(-50%)"
                }, 100, function(){
                });
                    
                    
                    //.css("left", pawMove);
            });