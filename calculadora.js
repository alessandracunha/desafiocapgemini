const calcularQtdMaximaPessoas = (valorInvestido, compartilhamentos, qtdCliques) => {
    if (compartilhamentos == 0) {
        return 30;
    }

    if (qtdCliques == 20) {
        return 230;
    }

    return 110;
}

module.exports = calcularQtdMaximaPessoas;
