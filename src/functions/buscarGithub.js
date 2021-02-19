const fetch = require('node-fetch');

module.exports = async function buscarGithub(usuario) {
    const url = `https://api.github.com/users/${usuario}`;

    const response = await fetch(url);
    const gitJson = await response.json();

    return gitJson;
}