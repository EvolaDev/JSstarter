class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function awsDecorator(serverInstance) {
    serverInstance.isAws = true;
    serverInstance.getInfo = () => serverInstance.url;

    return serverInstance;
}

const server = awsDecorator(new Server('128.0.0.1', '80'));
console.log(server.getInfo());
