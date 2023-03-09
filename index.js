// git config --global user.email "gabrieldegkasten@gmail.com"
// git config --global user.name "Gabriel Kasten"

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/create', (req, res) => {
    res.render('new_form');
})


app.listen(8080, () => {
    console.log('Server rodando');
})