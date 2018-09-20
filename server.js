const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

app.get('/', (request, response) => response.send('Hello World'));


app.use('/api', router);


router.post('/register', (request, response) => {
    response.json({message: 'Hello, welcome to my server'});
});


app.all('*',function(request,res,next)
{
    if (!request.get('Origin')) return next();

    response.set('Access-Control-Allow-Origin','https://nodeserverapis.herokuapp.com/');
    response.set('Access-Control-Allow-Methods','GET,POST');
    response.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    if ('OPTIONS' == request.method) return response.send(200);

    next();
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
