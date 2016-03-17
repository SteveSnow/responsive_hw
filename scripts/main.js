$('.x2').click(function(event) {
    if ($('body').width() <= 400) {
        if ($(event.toElement).find('p').is(":visible")) {
            $(event.toElement).find('p').hide()
        } else {
            $(event.toElement).find('p').show()
        }

    }
});
