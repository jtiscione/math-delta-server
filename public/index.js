$(function() {

    function listen() {
        var aVal = parseFloat($('#a').val());
        var xVal = parseFloat($('#x').val());
        if (isNaN(aVal) || isNaN(xVal)) {
            $('#result').text("Aw, snap!");
            console.log("NaN... a:" + aVal + ", x: " + xVal);
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
                $('#result').text("Server error.");
                console.log("NaN... a:" + aVal + ", x: " + xVal);
                console.log(textStatus+", err "+err);
            }
        }).done(function(data) {
            console.log(data.result);
            var percent = Math.round(1000 * data.result) / 10;
            $('#result').text(percent + "%");
            if (percent === 96.2) {
                $('#easter_egg').html("<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/P7jhoby-UUo?start=92&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>");
                setTimeout(function(){$('#easter_egg').html('')}, 12000);
            }
        });
    };

    $('#a').on("input change", listen);
    $('#x').on("input change", listen);

});



























var checkResult = function(percent) {
}