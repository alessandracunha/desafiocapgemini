const dateDiff = (dataInicio, dataFim) => {
    return Math.round(((dataInicio - dataFim) / (1000 * 60 * 60 * 24) * -1) + 1)
}

module.exports = { dateDiff };
