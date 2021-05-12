const User = require('../models/User')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, // token expira a cada 24 horas
    }) // segredo criado com hash md5 armazenado no json em config.
}

exports.register = async (req, res) => {
        const { name, email, password } = req.body

        try {
            if ( await User.findOne({ where: { email }}))
                return res.status(400).send({ error: 'User already exists' })

            const user = await User.create({ name, email, password })

            user.password = undefined // para a senha não voltar no corpo da requisição
            
            return res.send({
                user,
                token: generateToken({ id: user.id })
            })
        } catch (error) {
            return res.status(400).send({ error: 'Registration failed.' })
        }
    }

exports.authenticate = async (req,res) => {
        const { email, password } = req.body

        const user = await User.findOne({where: { email }})

        if (!user)
            return res.status(400).send({ error: 'User not found' })
        
        if (!await bcrypt.compare(password, user.password)) // comparando senha que o user está tentando com a que está armazenada no db
            return res.status(400).send({error: 'Invalid password' })

        user.password = undefined // para a senha não voltar no corpo da requisição

        res.send({
            user,
            token: generateToken({ id: user.id })
        }) // não havendo erro, login success
    }