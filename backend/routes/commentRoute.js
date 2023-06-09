const express = require('express')
const commentRoute = express.Router()
const User = require('../config/firebase.config')
const {addDoc} = require('firebase/firestore') 
const {getMessaging, getToken} =  require('firebase/messaging')
const FCM = require('fcm-node')
const {commentController} = require('../controllers')

const fcm = new FCM(process.env.SERVER_KEY)
commentRoute.use((req, res, next) => {
    // Post middleware
    //const authHeader = req.headers.authorization;
    //if (authHeader) {
    //    next()

    //} else {
    //    res.json({
    //        "code": "unauthenticated",
    //        "message": "Not Authorized"
    //    })
    //}
    next()
})
commentRoute.get("/:id",commentController.handleShowComment)

commentRoute.post("/:id",commentController.handleAddComment)

module.exports = commentRoute;