class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} do ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has salary - ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'software engineering';
    }
}

const dev = new Developer('Disa', 200000);

console.log(dev.work());
