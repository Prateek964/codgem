const User = require('../models/user')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const sgMail = require('@sendgrid/mail')
const { send } = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const {OAuth2Client} = require('google-auth-library')
const fetch = require('node-fetch')
const { response } = require('express')

// exports.signup = (req, res) => {
//     //console.log('REQ BODY ON SIGNUP', req.body)
//     const {name, email, password} = req.body

//     User.findOne({email}).exec((err, user) =>  {
//         if(user) {
//             return res.status(400).json({
//                 error: 'Email is taken'
//             })
//         }
//     })

//     let newUser = new User({name, email, password})

//     newUser.save((err, success) => {
//         if(err) {
//             console.log('SIGNUP ERROR', err)
//             return res.status(400).json({
//                 error: err
//             })
//         }
//         res.json({
//             message: 'Signup success! Please signin'
//         })
//     })
// }


exports.signup = (req, res) => {
    const {name, email, password} = req.body
        User.findOne({email}).exec((err, user) =>  {
            if(user) {
                return res.status(400).json({
                    error: 'Email is taken'
                })
            }

            const token = jwt.sign({name, email, password}, process.env.JWT_ACCOUNT_ACTIVATION, {expiresIn: '15m'})

            const emailData = {
                from: process.env.EMAIL_FROM,
                to: email,
                subject: `ACCOUNT ACTIVATION LINK`,  
                html: `
                    <p>Please use the following link to activate your account</p>
                    <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                    <hr />
                    <p>This email may contain senstive info</p>
                    <p>${process.env.CLIENT_URL}</p>
                `   
            }

            sgMail.send(emailData).then(sent => {
                return res.json({
                    message: `Email has been sent to ${email}. Follow the inst to activate`
                })
            })
            .catch(err => {
                console.log('error' ,err)
            })
        })

}

exports.accountActivation = (req, res) => {
    const {token} = req.body

    if(token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded) {
            if(err) {
                console.log('JET VERIFY IN ACCOUNT ACTIVATION ERROR', err)
                return res.status(401).json({
                    error: 'Expired link'
                })
            }

            const {name, email, password} = jwt.decode(token)

            const user = new User({name, email, password})

            user.save((err, user) => {
                if(err) {
                    console.log('SAVE USER IN ACCOUNT ACTIVATION ERROR', err)
                    return res.status(401).json({
                        error: 'Error saving user in database'
                    })
                }
                return res.json({
                    message: 'Signup success. Please signin'
                })
            })
        })
    } else {
        return res.json({
            message: 'Something went wrong'
        })
    }
}



exports.signin = (req, res) => {
    const {email, password} = req.body
    User.findOne({email}).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: 'User does not exists'
            })
        }
        if(!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and pass do not match'
            })
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
        const {_id, name, email, role} = user


        return res.json({
            token,
            user: {_id, name, email, role}
        })
    })
}


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
exports.googleLogin = (req, res) => {
    const {idToken} = req.body

    client.verifyIdToken({idToken, audience: process.env.GOOGLE_CLIENT_ID}).then(response => {
        const {email_verified, name, email} = response.payload
        if(email_verified) {
            User.findOne({email}).exec((err, user) => {
                if(user) {
                    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
                    const {_id, email, name, role} = user
                    return res.json({
                        token, user: {_id, email, name, role} 
                    })
                } else {
                    let password = email + process.env.JWT_SECRET
                    user = new User({name, email, password})
                    user.save((err, data) => {
                        if(err) {
                            console.log('ERROR GOOGLE LOGIN ON USER SAVE', err)
                            return res.status(400).json({
                                error: 'User sign in falied with google'
                            })
                        }
                        const token = jwt.sign({_id: data._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
                        const {_id, email, name, role} = data
                        return res.json({
                        token, user: {_id, email, name, role} 
                        })
                    })
                }
            })
        } else {
            return res.status(400).json({
                error: 'google login failed'
            })
        }
    })
}

exports.facebookLogin = (req, res) => {
    console.log('FACEBOOK LOFIN REQ BODY', req.body)
    const {userID , accessToken} = req.body
    
    const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`

    return(
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            const {email, name} = response
            User.findOne({email}).exec((err, user) => {
                if(user) {
                    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
                    const {_id, email, name, role} = user
                    return res.json({
                        token, user: {_id, email, name, role} 
                    })
                } else {
                    let password = email + process.env.JWT_SECRET
                    user = new User({name, email, password})
                    user.save((err, data) => {
                        if(err) {
                            console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err)
                            return res.status(400).json({
                                error: 'User sign in falied with facebook'
                            })
                        }
                        const token = jwt.sign({_id: data._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
                        const {_id, email, name, role} = data
                        return res.json({
                        token, user: {_id, email, name, role} 
                        })
                    })
                }
            })
        })
        .catch(error => {
            res.json({
                error: 'Facebook login failed'
            })
        })
    )
}












