class MyMath {
    constructor(initialValue) {
        this.number = initialValue;
    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.num ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.commandExecutor = [];
    }

    execute(command) {
        this.commandExecuted.push(command);
        return this.subject[command]();
    }
}

const x = new Command(new MyMath(2));
x.execute('square');
x.execute('cube');
