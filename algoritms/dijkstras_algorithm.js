const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;
graph['a'] = {};
graph['a']['fin'] = 1;
graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;
graph['fin'] = {};

const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

const processed = [];

const findLowestCostNode = () => {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
};

const mainFunction = graph => {
    let lowestNode = findLowestCostNode();
    while (lowestNode) {
        const cost = costs[lowestNode];
        const neighbors = graph[lowestNode];
        for (let node of Object.keys(neighbors)) {
            const newCost = cost + neighbors[node];
            if (costs[node] > newCost) {
                costs[node] = newCost;
                parents[node] = node;
            }
        }
        processed.push(lowestNode);
        lowestNode = findLowestCostNode(costs);
    }
    return costs['fin'];
};

module.exports = { mainFunction, graph };
