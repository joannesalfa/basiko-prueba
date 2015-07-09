//Carga de documentos - jQuery document ready
(function ($) {
    $(function () {

        $(window).load(function () {
            // Después de carga, lo revelamos
            $('.loader').fadeOut('slow', function () {
                $('#preload').css('visibility', 'visible').hide().fadeIn('slow');
                $('body').removeClass('overflow');
                console.log("Page loaded, ready");
            });
            //Init de efectos al scroll
            new WOW().init();
        });

        $(".button-collapse").sideNav();
        $('.tooltipped').tooltip({
            delay: 25
        });

        //Scrolling suave
        $(function () {
            $('a.suave[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

        //Seguidor de scroll: Boton flecha arriba, tiene problema cuando cambia ventana de window, boton de scroll se vuelve loco y quiere empujar hacia abajo.
        $(function () {

            var $seguidor = $(".follower"),
                $window = $(window),
                offset = $seguidor.offset(),
                topPadding = 400;
            $window.scroll(function () {
                if ($window.scrollTop() > offset.top) {
                    $seguidor.stop().animate({
                        marginTop: $window.scrollTop() - offset.top + topPadding
                    });
                } else {
                    $seguidor.stop().animate({
                        marginTop: 0
                    });
                }
            });
        });

        //Slider
        $('.sliderContent').bxSlider({
            slideWidth: 280,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 3,
            slideMargin: 0,
            pager: false,
            controls: true,
            touchEnabled: true,
            swipeThreshold: 100
        });
        $('.bx-controls-direction').addClass('hide-on-med-and-down');

        //Portafolio
        $(function () {
            var filterList = {
                init: function () {
                    // MixItUp plugin
                    // http://mixitup.io
                    $('#portafolio').mixItUp({
                        animation: {
                            duration: 400,
                            effects: 'fade scale(0.85) translateZ(-360px)',
                            easing: 'ease'
                        },
                        selectors: {
                            target: '.estampa',
                            filter: '.filter'
                        },
                        callbacks: {
                            onMixLoad: function () {
                                $('#firstBtn').addClass('on')
                            },
                        },
                        controls: {
                            activeClass: 'on'
                        }
                    });
                },
            };
            filterList.init();
        });

        //Google Maps
        //Init
        function initialize() {
            var myLatlng = new google.maps.LatLng(20.6538838, -103.4461068);
            var mapOptions = {
                zoom: 17,
                center: myLatlng,
                disableDefaultUI: true,
                scrollwheel: false
            }
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var iconBase = '../images/';
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Basiko, Zapopan, Jalisco, México',
                //Custom Marker
                icon: iconBase + 'marker.png'
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);

    }); // Fin de carga de documentos
})(jQuery); // Fin de Init de jQuery