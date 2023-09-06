require('dotenv').config();
const { request } = require('express');
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');
const cors = require('cors');

const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

const PORT = 5500;
DbConnect();
app.use(express.json());
app.use(router);

app.get('/',(req,res) => {
    res.send('Hello from express Js');
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}`));