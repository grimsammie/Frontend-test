$(function () {
    //Change background of nav
    $(function () {
        $(document).scroll(function () {
            var $nav = $("nav");
            var $header = $("header");
            $nav.toggleClass('bg-change', $(this).scrollTop() > $header.height());

            if($(this).scrollTop() > $header.height()) {
                $(".navbar-toggler").addClass('d-none')
            }
            else {
                $(".navbar-toggler").removeClass('d-none')
            }

        });
    });

    //Scroll to top and bottom
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
    
    //Change background of nav when navbar toggle is clicked
    $(".navbar-toggler").click(function(){
        $("nav").toggleClass("bg-change");
    })
});
