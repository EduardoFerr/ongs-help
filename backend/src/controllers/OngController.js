const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*')
    
        res.json({ ongs })
    },
    
    async create(req, res) {
        const data = { name, email, whatsapp, city, uf } = req.body
        const id = crypto.randomBytes(4).toString('hex')

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        res.json({ id })
    }
}