const calcularQtdMaximaPessoas = (valorInvestido) => {
    const qtdVisualizacoesOriginal = 30;
    const qtdVisualizacoes = valorInvestido * qtdVisualizacoesOriginal;

    const qtdCliques = calcularQtdCliques(qtdVisualizacoes);
    const qtdCompartilhamentos = calcularQtdCompartilhamentos(qtdCliques);
    const qtdNovasVisualizacoesPorCompartilhamento = 40;
    return qtdCompartilhamentos * qtdNovasVisualizacoesPorCompartilhamento + qtdVisualizacoes;
}

const calcularQtdCompartilhamentos = (qtdCliques) => {
    const cliquesBase = 20;
    const compartilhamentosBase = 3;
    const sequenciaMaximaCompartilhamentos = 4; 
    return Math.round((qtdCliques * compartilhamentosBase) / cliquesBase) * sequenciaMaximaCompartilhamentos;
}

const calcularQtdCliques = (qtdVisualizacoes) => {
    const visualizacoesBase = 100;
    const cliquesBase = 12;
    return Math.round((qtdVisualizacoes * cliquesBase) / visualizacoesBase);
}

module.exports = calcularQtdMaximaPessoas;
