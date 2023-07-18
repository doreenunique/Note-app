const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.NOTER_JWT_SECRET);

        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token  // Corrected 'token.token' to 'tokens.token'
        });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next(); // Call the next middleware or route handler
    } catch (e) {
        res.status(401).send({ Error: "Unauthenticated" });
    }
};

module.exports = auth;





























// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const auth = async (req, res, next) => {
//     try {
//         const token = req.header('Authorization').replace('Bearer ', '');

//         const decoded = jwt.verify(token, process.env.NOTER_JWT_SECRET);

//         const user = await User.findOne({
//             _id: decoded._id,
//             "tokens.token": token  // Corrected 'tokens' to 'token'
//         });

//         if (!user) {
//             throw new Error();
//         }

//         req.token = token;
//         req.user = user;
//         next(); // Call the next middleware or route handler
//     } catch (e) {
//         res.status(401).send({ Error: "Unauthenticated" });
//     }
// };

// module.exports = auth;










/*
const jwt = require("jsonwebtoken")

const User =require ("../models/user")

const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','');

        const decoded = jwt.verify(token, process.env.NOTER_JWT_SECRET)

        const user = await user.findOne({
            _id: decoded._id,
            "tokens.tokens" : token
        })

        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user
    }
    catch(e){
      res.status(401).send({Error: "unauthenticated"})
    }
}

module.exports = auth;
*/