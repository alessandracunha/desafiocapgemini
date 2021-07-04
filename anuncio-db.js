const Anuncio = require('./anuncio');
const { MongoClient } = require("mongodb");

class AnuncioDB {
    constructor() {
        const uri = "mongodb://localhost:27017/";
        this.client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    
    async salvar(anuncio) {
        try {
            await this.client.connect();
            const database = this.client.db('desafiocapgemini');
            const anunciosCollection = database.collection('anuncios');

            await anunciosCollection.insertOne(anuncio);
        } finally {
            await this.client.close();
        }
    }

    async getRelatorio(cliente, dataInicioVigencia, dataFimVigencia) {
        try {
            await this.client.connect();
            const database = this.client.db('desafiocapgemini');

            const anunciosCollection = database.collection('anuncios');

            const filtro = {
                dataInicioVigencia: 
                {
                    $gte: dataInicioVigencia.toISOString(),
                    $lt: dataFimVigencia.toISOString()
                },
                dataFimVigencia: {
                    $gte: dataInicioVigencia.toISOString(),
                    $lt: dataFimVigencia.toISOString()
                }
            };

            if (cliente) {
                filtro.cliente = cliente;
            }

            const anuncios = await anunciosCollection.find(filtro).toArray();
            return anuncios.map(a => {
                const anuncio = new Anuncio(a.nome, a.cliente, a.investimentoDia,
                    new Date(a.dataInicioVigencia), new Date(a.dataFimVigencia));
                return { nome: anuncio.nome, ...anuncio.getTotalizadores() }
            });
        } finally {
            await this.client.close();
        }
    }
}

module.exports = AnuncioDB
