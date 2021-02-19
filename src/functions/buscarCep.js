const fetch = require('node-fetch');

module.exports = async function buscarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(url);
    const cepJson = await response.json();

    return cepJson;
}