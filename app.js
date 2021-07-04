const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const AnuncioDB = require('./anuncio-db');
const Anuncio = require('./anuncio');

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/calcularValorInvestido', (req, res) => {
    const investimentoPorDia = req.query.investimentoPorDia;
    const dataInicioVigencia = new Date(req.query.dataInicioVigencia);
    const dataFimVigencia = new Date(req.query.dataFimVigencia);

    const anuncio = new Anuncio('', '', investimentoPorDia, dataInicioVigencia, dataFimVigencia);

    res.setHeader('content-type', 'text/plain');
    res.send(JSON.stringify(anuncio.getTotalizadores()));
})

app.post('/anuncio', async (req, res) => {
    const anuncio = new Anuncio(req.body.nome, req.body.cliente, req.body.investimentoDia, 
        req.body.dataInicioVigencia, req.body.dataFimVigencia);
    
    const anuncioDB = new AnuncioDB();
    await anuncioDB.salvar(anuncio);
    
    res.sendStatus(204);
})

app.get('/relatorio', async (req, res) => {
    const cliente = req.query.cliente;
    const dataInicioVigencia = new Date(req.query.dataInicioVigencia);
    const dataFimVigencia = new Date(req.query.dataFimVigencia);

    const anuncioDB = new AnuncioDB();
    const relatorio = await anuncioDB.getRelatorio(cliente, dataInicioVigencia, dataFimVigencia);
    res.send(JSON.stringify(relatorio))
})
   