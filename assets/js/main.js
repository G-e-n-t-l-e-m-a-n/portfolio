$(function(){

    // FILTER

    let filter = $("[data-filter]");
     
    filter.on("click", function(event){
        event.preventDefault();
        
        let cat = $(this).data('filter');

        if(cat== 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
                $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');
                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
     });


    // MODAL

    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");


    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        $('[data-slider="slick"]').slick('setPosition');
    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal").on("click", function(event) {    //  скроет модальное окно если на него нажать
       let $this = $(this);
       
       $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {   // не скроет модальное окно если на него нажать (кроме заднего фона)
        event.stopPropagation();
    });


    // SLIDER:   https://kenwheeler.github.io/slick/

    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        $('[data-slider="slick"]').slick("slickPrev")
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        $('[data-slider="slick"]').slick("slickNext")
    });


    // MOBILE NAV

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});