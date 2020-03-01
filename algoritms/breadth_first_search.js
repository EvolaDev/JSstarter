const Queue = require('../data_structures/Queue');

const graph = new (function Graph() {
    this.you = ['alice', 'bob', 'claire'];
    this.bob = ['ann', 'peggy', 'you'];
    this.alice = ['peggy'];
    this.claire = ['thom', 'jonny'];
    this.ann = [];
    this.peggy = [];
    this.jonny = [];
    this.thom = [];
})();

const breadthFirstSearch = graph => {
    const queue = new Queue(graph['you']);
    const alreadyChecked = [];
    while (!queue.isEmpty()) {
        const person = queue.peek();
        queue.dequeue();
        // if person is already checked then next iteration
        if (alreadyChecked.includes(person)) continue;
        if (isSeller(person)) {
            console.log(person + ' is seller');
            return true;
        }
        queue.enqueue(graph[person]);
        alreadyChecked.push(person);
    }
    return false;
};

const isSeller = person => {
    // if person contains letter m - he is a seller
    return ~person.indexOf('m');
};

module.exports = { breadthFirstSearch, graph };
