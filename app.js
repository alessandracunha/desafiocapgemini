const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const calculadora = require('./calculadora');

app.use(cors())

app.get('/calcularValorInvestido', (req, res) => {
    const investimento = req.query.investimento;
    res.setHeader('content-type', 'text/plain');

    const qtdPessoas = calculadora.calcularQtdMaximaPessoas(investimento);
    const qtdCliques = calculadora.calcularQtdCliques(calculadora.calcularQtdVisualizacoesBase(investimento));
    const qtdCompartilhamentos = calculadora.calcularQtdCompartilhamentos(qtdCliques);

    res.send(JSON.stringify(
        { 
            investimento,
            qtdPessoas,
            qtdCliques,
            qtdCompartilhamentos
        }
    ));
})

app.post('/anuncio', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
   