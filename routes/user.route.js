var router = require('express').Router();
var userController = require('./../controller/user.controller');

module.exports = function () {

    router.post('/login', userController.login);
    //5 API CHÍNH CỦA MỘT ĐỐI TƯỢNG => USER

    router.get('/', userController.getAllUser); // API lấy danh sách user 
    router.get('/:id', userController.getOneUser); // API lấy thông tin của 1 user
    router.post('/', userController.createUser); // API tạo ra 1 user
    router.put('/:id', userController.updateUser); // API sửa thông tin của 1 user 
    router.delete('/:id', userController.deleteUser); // API xáo 1 user

    return router;
};





















function getAllUser(req, res, next) {
    userController.getAllUser().then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}

function getUser(req, res, next) {
    var request = {
        id: req.params.id
    };

    userController.getUser(request).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}

function updateUser(req, res, next) {
    var request = {
        id: req.params.id,
        name: req.body.name
    };

    userController.updateUser(request).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}

function deleteUser(req, res, next) {
    var request = {
        id: req.params.id
    };

    userController.deleteUser(request).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}