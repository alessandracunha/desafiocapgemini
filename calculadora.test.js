const calculadora = require('./calculadora');

describe('receba o valor investido em reais e retorne uma projeção aproximada da quantidade máxima de pessoas', () => {
    test('cada 1 real investido devo obter 190 visualizacoes', () => {
        expect(calculadora.calcularQtdMaximaPessoas(1)).toBe(190);
    });

    test('cada 2 reais investidos devo obter 220 visualizacoes', () => {
        expect(calculadora.calcularQtdMaximaPessoas(2)).toBe(220);
    });

    test('cada 1000 reais investidos devo obter 116400 visualizacoes', () => {
        expect(calculadora.calcularQtdMaximaPessoas(1000)).toBe(116400);
    });
});

