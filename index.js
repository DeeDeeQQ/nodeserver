const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

// url: http://localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

// all routes prefixed with /api
app.use('/api', router);

// using router.get() to prefix our path
// url: http://localhost:3000/api/
app.post("/register", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
  response.send("Success");
});

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));