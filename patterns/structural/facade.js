class Orders {
    constructor() {
        this.orders = [];
    }

    reply(order) {}

    add(order) {
        this.orders.push(order);
        return this.reply(order);
    }
}

class ImmediateOrders extends Orders {
    reply({ id, customer, details }) {
        return `Product ${id}: ${customer}, ${details}`;
    }
}

class LowPriorityOrder extends Orders {
    reply({ id, customer, details }) {
        return `Low priority order ${id} ${customer} ${details}`;
    }
}

class OrderRegistry {
    register(customer, type, details) {
        const id = Date.now();
        const order = type === 'immediate' ? new ImmediateOrders() : new LowPriorityOrder();
        return order.add({ id, customer, details });
    }
}
