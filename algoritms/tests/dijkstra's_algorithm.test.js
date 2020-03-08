const dijkstras = require('../dijkstras_algorithm');

describe('test for dijkstras algorithm', () => {
    test('lowest cost of way is 6', () => {
        expect(dijkstras.mainFunction(dijkstras.graph)).toBe(6);
    });
});
