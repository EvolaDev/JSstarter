class DataBase {
    constructor(data) {
        if (DataBase.instance !== null) {
            return DataBase.instance;
        }
        DataBase.instance = this;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}
