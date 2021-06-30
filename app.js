const express = require('express')
const app = express()
const port = 3000
const calcularQtdMaximaPessoas = require('./calculadora');

app.get('/calcularQtdMaximaPessoas', (req, res) => {
    const investimento = req.query.investimento;
    const compartilhamentos = req.query.compartilhamentos;
    res.setHeader('content-type', 'text/plain');
    res.send(JSON.stringify({ qtdPessoas: calcularQtdMaximaPessoas(investimento, compartilhamentos) }));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
   