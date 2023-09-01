require('dotenv').config();
const { request } = require('express');
const express = require('express');
const app = express();
const run = require('./database');
const router = require('./routes');

const PORT = process.env.PORT || 5500;
app.use(express.json());
app.use(router);

app.get('/',(req,res) => {
    res.send('Hello from express Js');
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}`));