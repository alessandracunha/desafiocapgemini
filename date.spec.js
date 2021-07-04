const date = require('./date');

describe('Date', () => {
    test('01-07-2021 - 31-07-2021 retorne 31 dias', () => {
        const dias = date.dateDiff(new Date('07-01-2021'), new Date('07-31-2021'));

        expect(dias).toBe(31);
    });

    test('01-07-2021 - 30-09-2021 retorne 92 dias', () => {
        const dias = date.dateDiff(new Date('07-01-2021'), new Date('09-30-2021'));

        expect(dias).toBe(92);
    });

    test('01-07-2021 - 30-09-2022 retorne 457 dias', () => {
        const dias = date.dateDiff(new Date('07-01-2021'), new Date('09-30-2022'));

        expect(dias).toBe(457);
    });
});
