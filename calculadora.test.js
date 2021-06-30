const calcularQtdMaximaPessoas = require('./calculadora');

describe('receba o valor investido em reais e retorne uma projeção aproximada da quantidade máxima de pessoas', () => {
    test('30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.', () => {
        expect(calcularQtdMaximaPessoas(1, 0, 0)).toBe(30);
    });

    test('cada compartilhamento nas redes sociais gera 40 novas visualizações', () => {
        expect(calcularQtdMaximaPessoas(1, 2, 0)).toBe(110);
    });

    test('cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais', () => {
        expect(calcularQtdMaximaPessoas(1, 2, 20)).toBe(230);
    });
});
