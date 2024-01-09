$(document).ready(function () {
    // scroll
    $(window).on('scroll', function () {
        // progression
        const pro1 = $(document).height() - $(window).innerHeight()
        const proV = $(window).scrollTop() / pro1
        $('.progression').css('width', proV * 100 + '%')
        // nav
        if (scrollY > 10) {
            $('.navbar').addClass('fill_nav')
        }
        else {
            $('.navbar').removeClass('fill_nav')
        }
        // hori
        const win_w = $(window).innerWidth()
        if (win_w > 992) {
            const hori1 = $("#sec4").innerHeight() - $(window).innerHeight()
            const hori2 = $(window).scrollTop() - $("#sec4").offset().top
            const val = hori2 / hori1
            console.log(val)
            if (val > 0 && val < 1) {
                $('#sec4').addClass('fx')
            }
            if (val < 0) {
                $('#sec4').removeClass('fx')
                $('#sec4').removeClass('b0')
            }
            if (val > 1) {
                $('#sec4').removeClass('fx')
                $('#sec4').addClass('b0')
            }
            if (val >= 0 && val < 0.26) {
                $('.hori_fixed').css('background', 'black')
                $('.hori_blur').css('backdrop-filter', 'blur(0px)')
            }
            if (val >= 0.26 && val < 0.49) {
                $('.hori_fixed').css('background', 'var(--color2)')
                $('.hori_blur').css('backdrop-filter', 'blur(25px)')
            }
            if (val >= 0.49 && val < 0.71) {
                $('.hori_fixed').css('background', 'var(--color1)')
                $('.hori_blur').css('backdrop-filter', 'blur(25px)')
            }
            if (val >= 0.71 && val < 0.94) {
                $('.hori_fixed').css('background', 'var(--color2)')
                $('.hori_blur').css('backdrop-filter', 'blur(25px)')
            }
            if (val >= 0.94 && val < 1) {
                $('.hori_fixed').css('background', 'var(--color1)')
                $('.hori_blur').css('backdrop-filter', 'blur(25px)')
            }
            set(val)
        }
        if (win_w < 992) {
            $('.hori_absolute').css('transform', 'translateX(0px)')
            $('#sec4').removeClass('fx')
            $('#sec4').removeClass('b0')
        }
    })

    const handler = () => {
        const height = $('#sec3').offset().top - $(window).innerHeight() * 0.75
        if ($(window).scrollTop() > height) {
            $(window).unbind('scroll', handler)
            count()
        }
    }
    $(window).bind('scroll', handler)

    // function
    function set(v) {
        if (v > 1) {
            v = 1
        }
        if (v < 0) {
            v = 0
        }
        const hori3 = $("#sec4").innerHeight() - $(window).innerWidth()
        $('.hori_absolute').css('transform', 'translateX(' + hori3 * v * -1 + 'px)')
    }

    function count() {
        $('.count').each(function () {
            $(this).prop('a', 0)
                .animate({ a: $(this).text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now))
                    }
                })
        })
    }


    AOS.init({
        duration: 1000
    })
})