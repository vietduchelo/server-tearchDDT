/**
 * @api {get} /api/user GET ALL USER
 * @apiDescription API Get all user
 * @apiVersion 0.0.1
 * @apiName getAllUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user
 *
 * @apiHeader (Request Header) {String} x-access-token token
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name Full name
 * @apiSuccess (Response Body 200) {String} email Email
 * @apiSuccess (Response Body 200) {String} password Password
 * @apiSuccess (Response Body 200) {String} salt Salt
 * @apiSuccess (Response Body 200) {String} role Role
 * @apiSuccess (Response Body 200) {Date} createdDate Created date 
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *        "_id": "599545c60548b62a678409b9",
 *        "email": "duongdangthanh01@gmail.com",
 *        "name": "Thanh 123",
 *        "password": "123",
 *        "createdDate": "2017-08-17T07:29:10.635Z",
 *        "__v": 0,
 *        "role": "User"
 *    },
 *    {
 *        "_id": "59954f7e16b5f52d4977ca2e",
 *        "email": "duongdangthanh02@gmail.com",
 *        "name": "Thanh",
 *        "password": "BkW71CMN7pDAdt8eavxULYf4hv1jMpsPate0RvqGe22H1YODRENbVfI5JQsufGqrkxxYlvJQaug0o/IfA7+mLbqMH+VD6kzsuZC2ORB9/lXbZKm59NxfpY4U8LzIubpFPA/bjzId9DJRKbBCzPLo0OjgtPk/YAq3bFistBY98Y8=",
 *        "createdDate": "2017-08-17T08:10:38.664Z",
 *        "__v": 0,
 *        "role": "User"
 *    }
 * ]
 */


//-----------------------------------------------------

/**
 * @api {get} /api/user/:id GET ONE USER
 * @apiDescription API Get one user
 * @apiVersion 0.0.1
 * @apiName getUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id User id
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name Full name
 * @apiSuccess (Response Body 200) {String} email Email
 * @apiSuccess (Response Body 200) {String} password Password
 * @apiSuccess (Response Body 200) {String} salt Salt
 * @apiSuccess (Response Body 200) {String} role Role
 * @apiSuccess (Response Body 200) {Date} createdDate Created date 
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "_id": "599545c60548b62a678409b9",
 *        "email": "duongdangthanh01@gmail.com",
 *        "name": "Thanh 123",
 *        "password": "123",
 *        "createdDate": "2017-08-17T07:29:10.635Z",
 *        "__v": 0,
 *        "role": "User"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "error": "USER_NOT_FOUND"
 * }
 */

//-----------------------------------------------------

/**
 * @api {put} /api/user CREATE USER
 * @apiDescription API Create user
 * @apiVersion 0.0.1
 * @apiName createUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Body) {String} email Email
 * @apiParam (Request Body) {String} password Password
 * @apiParam (Request Body) {String} name Name
 * @apiParam (Request Body) {String} role Role
 * 
 * @apiRequestExample {json} Request:
 *    {
 *        "email": "duongdangthanh01@gmail.com",
 *        "name": "Thanh 123",
 *        "password": "123",
 *        "role": "User"
 *    }
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name Full name
 * @apiSuccess (Response Body 200) {String} email Email
 * @apiSuccess (Response Body 200) {String} password Password
 * @apiSuccess (Response Body 200) {String} salt Salt
 * @apiSuccess (Response Body 200) {String} role Role
 * @apiSuccess (Response Body 200) {Date} createdDate Created date 
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "_id": "599545c60548b62a678409b9",
 *        "email": "duongdangthanh01@gmail.com",
 *        "name": "Thanh 123",
 *        "password": "123",
 *        "createdDate": "2017-08-17T07:29:10.635Z",
 *        "__v": 0,
 *        "role": "User"
 *    }
 */

 //-----------------------------------------------------

/**
 * @api {post} /api/user/:id UPDATE USER
 * @apiDescription API Update User
 * @apiVersion 0.0.1
 * @apiName updateUser
 * @apiGroup User
 * @apiPermission Admin, User
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id User id
 * @apiParam (Request Body) {String} name Name
 * 
 * @apiRequestExample {json} Request:
 *    {
 *        "name": "Thanh 12345",
 *    }
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} _id User id
 * @apiSuccess (Response Body 200) {String} name Full name
 * @apiSuccess (Response Body 200) {String} email Email
 * @apiSuccess (Response Body 200) {String} password Password
 * @apiSuccess (Response Body 200) {String} salt Salt
 * @apiSuccess (Response Body 200) {String} role Role
 * @apiSuccess (Response Body 200) {Date} createdDate Created date 
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "_id": "599545c60548b62a678409b9",
 *        "email": "duongdangthanh01@gmail.com",
 *        "name": "Thanh 12345",
 *        "password": "123",
 *        "createdDate": "2017-08-17T07:29:10.635Z",
 *        "__v": 0,
 *        "role": "User"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "error": "USER_NOT_FOUND"
 * }
 */

  //-----------------------------------------------------

/**
 * @api {delete} /api/user/:id DELETE USER
 * @apiDescription API Delete User
 * @apiVersion 0.0.1
 * @apiName deleteUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost/api/user/599545c60548b62a678409b9
 *
 * @apiHeader (Request Header) {String} x-access-token token
 *
 * @apiParam (Request Params) {String} id User id
 * 
 * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
 * @apiSuccess (Response Body 200) {String} message Message
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *        "message": "USER_DELETED"
 *    }
 *
 * @apiError (Response Body 404) {String} message Error message
 * @apiErrorExample {json} Error-404-Response:
 *  {
 *      "error": "USER_NOT_FOUND"
 * }
 */
