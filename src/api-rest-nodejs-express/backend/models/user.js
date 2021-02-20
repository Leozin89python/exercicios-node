const mongoose = require('../database/banco')

const useSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    passsword:{
        type: String,
        required: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', useSchema)

module.exports = User