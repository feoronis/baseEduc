const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../.env' });
const {UserModel} = require('../models/user');




exports.isAuth = async (req, res, next) => {
    if (!req.cookies.jwt) {
        console.log('!token');
        return res.redirect('/login');
    }

    

    try {
        const secretKey = process.env.SECRETJWT;
        const token = req.cookies.jwt.token;
        const user = jwt.verify(token, secretKey);
        req.user = user;

        const userFind = await UserModel.findOne({_id:user.data._id});


        console.log(userFind);
        if (!userFind) {
            throw new Error('user not found');
        }
        console.log('isAuth true');
        
        next();
    } catch (error) {
        console.log(error);
        res.redirect('/login');
    }
};

