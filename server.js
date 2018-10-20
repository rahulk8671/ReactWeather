var express = require('express');



// create our app 
var app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next){
    if(req.header('x-forwarded-proto') === 'http') {
        next();
    }else {
        res.redirect('https://'+req.hostname+req.url);
    }
});

app.use(express.static('public'));
app.listen(port, function() {
    console.log('working ...'+ port);
});

