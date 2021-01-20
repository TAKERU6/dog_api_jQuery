jQuery(function () {
    $("body").css('background-color', 'grey')
    $(".button_container").css({
        'width': '176px',
        'margin': '0auto',
        'margin-top': '30px',
        'padding-top': '40px'
    })
    $(".button_su").css({
        'overflow': 'hidden',
        'position': 'relative',
        'display': 'inline-block',
        'border-radius': '3px',
        'margin-bottom': '30px',
    })
    $(".su_button_circle").css({
        'background-color': 'red',
        'border-radius': '1000 px',
        'position': 'absolute',
        'left': '0',
        'top': '0',
        'width': '0px',
        'height': '0px',
        'margin-left': '0px',
        'margin-top': '0px',
        'pointer-events': 'none'
    })

    $(".button_su_inner").css({
        'display': 'inline-block',
        'background': '#F8B627',
        'color': '#F4F4F4',
        'font-size': '16px',
        'font-weight': 'normal',
        'width': '132px',
        'text-align': 'center',
        'border-radius': '3px',
        'transition': '400ms',
        'text-decoration': 'none',
        'padding': '22px',
        'z-index': '100000'
    })

    $(".button_text_container").css({
        'position': 'relative',
        'z-index': '10000'
    })

    $(".button_su_inner").on('click', function (e) {
        $.ajax("https://dog.ceo/api/breeds/image/random", {
                type: 'get'
            })
            .done(function (data) {
                $(data).each(function () {
                    $('.dog_list').append(
                        $('<li></li>').append(
                            $('<img width="150" height="150"></img>')
                            .attr('src', data.message)
                        )
                    );
                });
            })
            .fail(function () {
                window.alert('Connect Error')
            })
    })
})