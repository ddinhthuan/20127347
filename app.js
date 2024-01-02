'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('IF YOU CAN SEE THIS LINE IT MEAN THE CONTAINER IS RUNNING SUCCESSFUL');
});

app.get('/newpage', (req, res) => {
    
    res.send("a very new page now");
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
