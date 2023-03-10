const PORT = 8080;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/create', (req, res) => {
    res.render('new_form');
})

app.post('/save', (req, res) => {
    res.send('Formulário recebido!');
})

app.listen(PORT, () => {
    console.log(`
        O servidor está rodando na porta ${PORT}!
    `);
})