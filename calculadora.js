const calcularQtdMaximaPessoas = (valorInvestido, compartilhamentos, qtdCliques) => {
    let qtdVisualizacoes = 0;

    if (compartilhamentos == 0) {
        qtdVisualizacoes = 30;
    } else if (qtdCliques == 20) {
        qtdVisualizacoes = 230;
    } else {
        qtdVisualizacoes = 110;
    }

    return calcularQtdCompartilhamentos(qtdVisualizacoes) * 40 + qtdVisualizacoes;
}

const calcularQtdCompartilhamentos = (qtdVisualizacoes) => {
    const cliquesBase = 20;
    const compartilhamentosBase = 3;
    return Math.round((calcularQtdCliques(qtdVisualizacoes) * compartilhamentosBase) / cliquesBase);
}

const calcularQtdCliques = (qtdVisualizacoes) => {
    const visualizacoesBase = 100;
    const cliquesBase = 12;
    return Math.round((qtdVisualizacoes * cliquesBase) / visualizacoesBase);
}

module.exports = calcularQtdMaximaPessoas;
