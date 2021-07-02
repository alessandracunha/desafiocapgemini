/**
 * @param {*} valorInvestido 
 * @description Recebe um valor investido em reais e retorna uma projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio
 */
const calcularQtdMaximaPessoas = (valorInvestido) => {
    const qtdVisualizacoesOriginal = 30;
    const qtdVisualizacoes = valorInvestido * qtdVisualizacoesOriginal;

    const qtdCliques = calcularQtdCliques(qtdVisualizacoes);
    const qtdCompartilhamentos = calcularQtdCompartilhamentos(qtdCliques);
    const qtdNovasVisualizacoesPorCompartilhamento = 40;
    return qtdCompartilhamentos * qtdNovasVisualizacoesPorCompartilhamento + qtdVisualizacoes;
}

/**
 * 
 * @param {*} qtdCliques 
 * @description A cada 20 pessoas que clicam no anúncio 3 compartilham e no máximo são compartilhados 4 em sequência
 * Recebe a quantidade de cliques como referência e aplica uma regra de 3 nesse valor base de cliques multiplicando pelo máximo em sequência 
 * Como não existe meio clique se arredonda o valor do resultado da regra de 3
 */
const calcularQtdCompartilhamentos = (qtdCliques) => {
    const cliquesBase = 20;
    const compartilhamentosBase = 3;
    const sequenciaMaximaCompartilhamentos = 4; 
    return Math.round((qtdCliques * compartilhamentosBase) / cliquesBase) * sequenciaMaximaCompartilhamentos;
}

/**
 * 
 * @param {*} qtdVisualizacoes 
 * @description A cada 100 pessoas que visualizam o anúncio 12 clicam nele
 * Recebe a quantidade de vizualizações como referência e aplica regra de 3 no valor base de vizualizações 
 * Como não existe meio clique se arredonda o valor do resultado da regra de 3
 */
const calcularQtdCliques = (qtdVisualizacoes) => {
    const visualizacoesBase = 100;
    const cliquesBase = 12;
    return Math.round((qtdVisualizacoes * cliquesBase) / visualizacoesBase);
}

module.exports = calcularQtdMaximaPessoas;
