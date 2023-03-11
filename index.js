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
    var title = req.body.title;
    var description = req.body.description;

    res.send(`Título: ${title}, Descrição: ${description}`);
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}!`);
})