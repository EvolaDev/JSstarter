class Light {
    constructor(light) {
        this.light = light;
    }
}

class ReadLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'Стоп';
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        return 'Готовься';
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        return 'Едь';
    }
}

class TrafficLight {
    constructor() {
        this.states = [new GreenLight(), new YellowLight(), new ReadLight()];
        this.current = this.states[0];
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex(light => light === this.current);

        if (index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign();
    }
}
