$(function() {

    function listen() {
        var aVal = parseFloat($('#a').val());
        var xVal = parseFloat($('#x').val());
        if (isNaN(aVal) || isNaN(xVal)) {
            console.log("NaN...");
            return;
        }
        $.ajax({
            url: '/integral',
            type: 'GET',
            cache: false,
            data: {
                a: aVal,
                x: xVal
            },
            error: function(jqXHR, textStatus, err) {
                console.log(textStatus+", err "+err);
            }
        }).done(function(data) {
            console.log(data.result);
            var percent = Math.round(1000 * data.result) / 10;
            $('#result').text(percent + "%");
        });
    };

    $('#a').on("input change", listen);
    $('#x').on("input change", listen);

});