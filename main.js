jQuery(function () {
    $(".click").on('click', function () {
        $.ajax("https://dog.ceo/api/breeds/image/random", {
                type: 'get'
            })
            .done(function (data) {
                $(data).each(function () {
                    $('.dog_list').append(
                        $('<li></li>').append(
                            $('<img></img>')
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