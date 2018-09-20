const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

app.get('/', (request, response) => response.send('Hello World'));


app.use('/api', router);


router.post('/register', (request, response) => {
    response.json({message: 'Done'});
});





router.use((request, response, next) => {
    console.log('Server info: Request received');


    response.setHeader('Access-Control-Allow-Origin', "*");
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    response.setHeader('Access-Control-Allow-Credentials', true);


    next();
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
