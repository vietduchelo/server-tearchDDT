var mongoose = require('mongoose');
var config = require('./../config');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: config.ROLE.USER,
    },
    deleted: {
        type: Boolean,
        required: true,
        default: 0
    },
    createdDate: {
        type: Date
    },
    createBy: {
        type: String
    },
    modifiedDate: {
        type: Date
    },
    modifiedBy: {
        type: String
    }
});

var User = mongoose.model('user', userSchema);

module.exports = User;