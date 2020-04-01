class MySum {
    constructor(initialValue = 2) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value
        return this;
    }
}

const sum = new MySum(9);
console.log(sum.add(4).add(4));


