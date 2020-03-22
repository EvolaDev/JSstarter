const bike = {
    wheelsCount: 2,
    init() {
        console.log(`i have a ${this.wheelsCount} wheels and my owner is ${this.owner}`);
    }
}

const myBike = Object.create(bike, {
    owner: {
        value: 'Grisha'
    }
});

console.log(myBike.init());

