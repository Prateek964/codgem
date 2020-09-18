const {check} = require('express-validator')

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is req'),
    check('email')
        .isEmail()
        .withMessage('email is req'),
    check('password')
        .isLength({min: 6})
        .withMessage('pass is req')
]


exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('email is req'),
    check('password')
        .isLength({min: 6})
        .withMessage('pass is req')
]