class Guest {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.cost = 0;
    }
}

class User {
    constructor(name, duration, cost = 50) {
        this.name = name;
        this.duration = duration;
        this.cost = cost;
    }
}

class PremiumUser {
    constructor(name, duration, cost = 150) {
        this.name = name;
        this.duration = duration;
        this.cost = cost;
    }
}

class MemberFactory {
    static membershipList = {
        guest: Guest,
        standard: User,
        premium: PremiumUser,
    };

    create(type = 'quest', ...memberProps) {
        const Membership = MemberFactory.membershipList[type] || MemberFactory.membershipList.guest;
        Membership.type = type;
        return new Membership(...memberProps);
    }
}

const factory = new MemberFactory();
const membersArray = [factory.create('standard', 'disa', 100), factory.create('premium', 'kate', 300)];

console.log(membersArray);
