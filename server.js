const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/', (request, response) => response.send('Hello World'));


app.use('/api', router);


router.post('/register', (request, response) => {
    response.json({message: 'Hello, welcome to my server'});
});


app.all('*',function(req,res,next)
{
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','https://nodeserverapis.herokuapp.com/');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    if ('OPTIONS' == req.method) return res.send(200);

    next();
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
