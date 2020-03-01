const Queue = require('../data_structures/Queue');

const graph = new (function Graph() {
    this.you = ['alice', 'bob', 'claire'];
    this.bob = ['ann', 'peggy'];
    this.alice = ['peggy'];
    this.claire = ['thom', 'jonny'];
    this.ann = [];
    this.peggy = [];
    this.jonny = [];
    this.thom = [];
})();

const breadthFirstSearch = graph => {
    const queue = new Queue(graph['you']);
    while (!queue.isEmpty()) {
        const person = queue.peek();
        queue.dequeue();
        if (isSeller(person)) {
            console.log(person + ' is seller');
            return true;
        }
        queue.enqueue(graph[person]);
    }
    return false;
};

const isSeller = person => {
    // if person contains letter m - he is a seller
    return ~person.indexOf('m');
};

module.exports = { breadthFirstSearch, graph };
