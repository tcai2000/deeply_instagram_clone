const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const commentSchema = new Schema({
    comment_id: {
        type: ObjectId,
        auto: true
    },
    user_id: {
        type:String,
        required: true
    },
    parent_id: {
        type:String,
    },
    parent: {
        type: Boolean,
    },
    target_id: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        auto: true
    },
})

const CommentModel = mongoose.model('comments', commentSchema)

module.exports = CommentModel