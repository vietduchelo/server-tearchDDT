var message = require('./../utils/message');
var userService = require('./../service/user.service');

module.exports = {
    login: login,
    getAllUser: getAllUser,
    getOneUser: getOneUser,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
}

function getAllUser(req, res, next) {
    //Dữ liệu vào như thế nào ?
    //Có thể không cần. Lấy toàn bộ user trong database. 

    // Sử dụng Promise
    // Sử dụng callback 
    // => Để đón nhận kết quả sau khi service xử lý xong. 

    userService.getAllUser(function (err, response) {
        if (err) {
            res.status(err.statusCode).send(err);
        } else {
            res.send(response);
        }
    });
}

function getOneUser(req, res, next) {
    //Lấy dữ liệu

    let id = req.params.id;

    if (!id) {
        res.status(400).send({
            message: message.ERROR_MESSAGE.USER.INVALID
        });
    }

    userService.getOneUser(id).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        res.status(err.statusCode).send(err);
    })
}

function createUser(req, res, next) {
    let params = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        role: req.body.role,
    }

    // userService.createUser(params, function (err, response) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(response);
    //     }
    // })
    userService.createUser(params).then((response)=>{
        res.send(response);
    }).catch((err)=> {
        res.status(err.statusCode).send(err);
    })
}

function updateUser(req, res, next) {
    let params = {
        id: req.params.id,
        password: req.body.password,
        name: req.body.name,
        role: req.body.role,
    }

    userService.updateUser(params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.status(err.statusCode).send(err);
    });
}

function deleteUser(req, res, next) {
    let id = req.params.id;

    userService.deleteUser(id).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.status(err.statusCode).send(err);
    });
}


function login(req, res, next) {
    let userData = {
        username: req.body.username,
        password: req.body.password
    };

    userService.login(userData, function (err, response) {
        if (err) {
            res.status(err.statusCode).send(err);
        } else {
            res.send(response);
        }
    })
}