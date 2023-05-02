const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
//const cors = require('cors');
//const categories = require('./Data/categories.json');
//const news = require('./Data/news.json');

//app.use(cors())

app.get('/', (req, res) => {
    res.send('Testy food is Running')
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})