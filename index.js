const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const allChef = require('./Data/chef.json');
//const news = require('./Data/news.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Testy food is Running')
})

app.get('/allChef', (req, res) => {
    res.send(allChef)
})
app.get('/allChef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = allChef.find(ni => ni.id == id)
    res.send(selectedChef)
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})