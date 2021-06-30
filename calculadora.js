const calcularQtdMaximaPessoas = (valorInvestido, compartilhamentos, qtdCliques) => {
    let qtdVisualizacoes = 0;

    if (compartilhamentos == 0) {
        qtdVisualizacoes = 30;
    } else if (qtdCliques == 20) {
        qtdVisualizacoes = 230;
    } else {
        qtdVisualizacoes = 110;
    }

    let visualizacoesBase = 100;
    let cliquesBase = 12;
    const cliquesResult = Math.round((qtdVisualizacoes * cliquesBase) / visualizacoesBase);

    cliquesBase = 20;
    let compartilhamentosBase = 3;
    const compartilhamentosResult = Math.round((cliquesResult * compartilhamentosBase) / cliquesBase);
    
    return compartilhamentosResult * 40 + qtdVisualizacoes;
}

module.exports = calcularQtdMaximaPessoas;
