const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

app.get('/', (request, response) => response.send('Hello World'));


app.use('/api', router);


router.post('/register', (request, response) => {
    response.json({message: 'Hello, welcome to my server'});
});


const originWhitelist = ['http://localhost:3000', 'https://exchange-52741.firebaseapp.com'];


router.use((request, response, next) => {
    console.log('Server info: Request received');

    let origin = request.headers.origin;


    if (originWhitelist.indexOf(origin) > -1) {

    }

    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    response.setHeader('Access-Control-Allow-Credentials', true);


    next();
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
