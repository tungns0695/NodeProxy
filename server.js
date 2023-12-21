const express = require('express');
const bent = require('bent');
const cors = require('cors')
const app = express();
app.use(cors())
app.options('*', cors())
app.use(express.json());

app.post('/', async function (request, response) {
    const endpoint = request.body.endpoint;
    const post = bent(endpoint, 'POST', 'json', 200);
    const res = await post('', request.body);
    response.send(res);
});

app.listen(3000);