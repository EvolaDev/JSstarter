class OldComputer {
    calculating(operationName, data) {
        switch (operationName) {
            case 'add':
                return data.first + data.second;
            case 'multiply':
                return data.first * data.second;
            default:
                return NaN;
        }
    }
}

class NewComputer {
    add(data) {
        return data.first + data.second;
    }
    multiply(data) {
        return data.first + data.second;
    }
}

class ComputerAdapter {
    constructor() {
        this.computer = new NewComputer();
    }
    calculating(operationName, data) {
        switch(operationName) {
            case 'add': return this.computer.add(data)
            case 'multiply': return this.computer.multiply(data)
        }
    }
}
