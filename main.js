let $window = $(window);
let $nav = $("#global-nav");

$window.scroll(function(){
    if($window.scrollTop() > $("#top").outerHeight())
    {
        $nav.addClass("fixed");
        $("#about").css("margin-top",$nav.height());
    }
    else
    {
        $nav.removeClass("fixed");
        $("#about").css("margin-top",0);
    }
});

$(".animated").waypoint({
    handler(direction){
        if(direction === "down")
        {
            $(this.element).addClass("fadeInUp");
            this.destroy();
        }
    },
    offset : "50%",
});