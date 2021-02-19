const express = require('express');
const bodyParser = require('body-parser');

const buscarCep = require('./src/functions/buscarCep');
const buscarGithub = require('./src/functions/buscarGithub');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.set('view engine', 'ejs');
server.set('views', './src/views');

server.get('/', (req, res) => {
    res.render('index');
}); 

server.post('/consulta-cep', async (req, res) => {
    const { cep } = req.body;
    const resultado = await buscarCep(cep);

    res.render('consulta-cep', { dado: resultado });
});

server.post('/consulta-github', async (req, res) => {
    const { git } = req.body;
    const resultado = await buscarGithub(git);

    res.render('consulta-github', { dado: resultado });
});

server.listen(3333);