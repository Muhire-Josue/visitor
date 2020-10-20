const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => console.log('Server running on port 8081'));
