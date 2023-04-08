const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    user_id: {
        type: ObjectId,
        auto: true
    },
    user_name: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    avatar_url: {
        type: String,
        default: ""
    },
    token: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel