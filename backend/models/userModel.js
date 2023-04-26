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
    full_name: {
        type:String,
    },
    user_name: {
        type:String,
    },
    password: {
        type:String,
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
    },
    updated_at: {
        type: Date,
    },
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel