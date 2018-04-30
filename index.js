const express = require('express')
const shell = require('shelljs');
const screenshot = require('./screenshot');

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/screenshot', (req, res) => {
    console.log('take the screenshot');

    //sessionId and url must be sent from the requesting service
    const sessionId = '';
    // const url = 'http://localhost:8080/dhis-web-dashboard/index.html';
    // const url = 'http://localhost:3000';
    const url = 'http://localhost:8080/dhis-web-maps/?id=rWBLOMm1lE6';

    const timestamp = new Date().getTime();
    const filename = `${__dirname}/dhis-${timestamp}.png`;

    // shell.exec(`node ../screenshot-poc/index.js ${url} ${sessionId} ${filename}`);
    // res.download(filename);

    console.log('take screenshot with 3000');
    screenshot(url, sessionId, filename)
    .then(msg => {
      console.log(msg);
      res.download(filename); // Set disposition and send it.
    });


});

app.listen(9000, () => console.log('Example app listening on port 9000!'));
