const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;


app.get('/', (request, response) => response.send('Hello World'));


app.use('/api', router);


router.post('/register', (request, response) => {
    response.json({message: 'Hello, welcome to my server'});
});


app.listen(port, () => console.log(`Listening on port ${port}`));


app.all('*',function(req,res,next)
{
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','http://myapp.com');
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    if ('OPTIONS' == req.method) return res.send(200);

    next();
});