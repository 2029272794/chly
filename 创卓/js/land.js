$(function () {
    fnResize()
    window.onresize = function () {
        fnResize()
    }
    function fnResize() {
        var deviceWidth = document.documentElement.clientWidth ||
            window.innerWidth
        if (deviceWidth >= 750) {
            deviceWidth = 750
        }
        if (deviceWidth <= 320) {
            deviceWidth = 320
        }
        document.documentElement.style.fontSize = (deviceWidth / 7.5 * 2) + 'px'
    }
    var $input = $('.section-ul-li input')
    $input.bind({
        'focus': function () {
            // $(this).val('')
            // $(this).css({ 'color': '#30D3AC' });
            // $(this).parent().css({ 'border-bottom': '1px solid #30D3AC' })
            $(this).addClass("active-color")
            $(this).parent().addClass("active-border")
        },
        'blur': function () {
            $(this).parent().removeClass("active-border")

        }
    })
    $input.eq(0).keyup(function () {
        if ($(this).val().trim() != "") {
            
            $input.eq(1).keyup(function () {
                if ($(this).val().trim() != "") {
                    $('.btn-dl').addClass('active-btn')
                }
            })
        }else{
            $('.btn-dl').removeClass('active-btn')
        }
    })
})