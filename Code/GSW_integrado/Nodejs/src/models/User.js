const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')


class User extends Model {
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,

        },{
            sequelize: connection
        }) // criptografando password no pré save...
        User.addHook('beforeSave', async client => {
                client.password = await bcrypt.hash(client.password, 10)
        })
    }
}

module.exports = User