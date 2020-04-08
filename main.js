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

$(".global-nav a[href^='#'").click(function(e){
    let speed_ms = 600;
    let target = $(e.currentTarget).attr("href");
    let position = $(target).offset().top;
    $("body,html").animate({scrollTop : position},speed_ms,"swing");
    return false;
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