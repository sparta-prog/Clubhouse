const UserModel = require('../models/user-model');
class userService {
    async findUser(filter) {
        const user = await UserModel.findOne(filter).maxTimeMS(30000);
        return user;
    }

    async createUser(data) {
        const user = await UserModel.create(data);
        return user;
    }
}

module.exports = new userService();