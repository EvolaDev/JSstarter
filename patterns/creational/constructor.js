// ES5
function Car(model, cost) {
    this.model = model;
    this.cost = cost;
}

Car.prototype.getModel = function() {
    return this.model;
};

Car.prototype.getCost = function() {
    return this.cost;
};

var aws = new Car('audi', 10000);

console.log(`${aws.getModel()} ${aws.getCost()}`);

// ES6

class Car {

    constructor(model, cost) {
        this.model = model;
        this.cost = cost;
    }

    getModel() {
        return this.model;
    }

    getCost() {
        return this.cost;
    }
}

const aws = new Car('audi', 10000);
