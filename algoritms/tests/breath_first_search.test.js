const breadthFirstSearch = require('../breadth_first_search');

describe('test for breath-first search', () => {
    test('seller is thom', () => {
        expect(breadthFirstSearch.breadthFirstSearch(breadthFirstSearch.graph)).toBe(true);
    });
});
