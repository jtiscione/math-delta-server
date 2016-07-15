var path = require('path');
var express = require('express');
var delta = require('math-delta');

var app = express();

// Static pages:
app.use(express.static(path.join(__dirname, 'public')));

app.get('/integral', function(req, res) {
    var a = parseFloat(req.query.a);
    var x = parseFloat(req.query.x);
    if (!isNaN(a) && !isNaN(x)) {
        var integral = delta.nascent_delta_integral(a, -x, x);
        res.json({result: integral});
    } else {
        console.log();
        res.json({
            result: NaN,
            error: "Given parameters a: "+req.query.a + " and x: "+req.query.x
        });
    }
});

app.listen(3000, function () {
    console.log('Listening on port 3000.');
});
