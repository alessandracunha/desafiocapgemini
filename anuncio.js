const calculadora = require('./calculadora');
const date = require('./date');

class Anuncio {
    constructor(
        nome,
        cliente,
        investimentoDia,
        dataInicioVigencia,
        dataFimVigencia
    ) {
        this.nome = nome;
        this.cliente = cliente;
        this.investimentoDia = investimentoDia;
        this.dataInicioVigencia = dataInicioVigencia;
        this.dataFimVigencia = dataFimVigencia;
    }

    getTotalizadores() {
        const valorTotalInvestido = this.investimentoDia * date.dateDiff(this.dataInicioVigencia, this.dataFimVigencia); 
        const qtdMaximaVisualizacoes = calculadora.calcularQtdMaximaPessoas(valorTotalInvestido);
        const qtdMaximaCliques = calculadora.calcularQtdCliques(calculadora.calcularQtdVisualizacoesBase(valorTotalInvestido));
        const qtdMaximaCompartilhamentos = calculadora.calcularQtdCompartilhamentos(qtdMaximaCliques);
        
        return { 
            valorTotalInvestido,
            qtdMaximaVisualizacoes,
            qtdMaximaCliques,
            qtdMaximaCompartilhamentos
        };
    }
}

module.exports = Anuncio
