const express = require("express");

const User = require("../models/user");

const auth = require("../middlewares/auth");


const router = new express.Router();

// Create user
router.post("/users/create", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();

    const token = await user.generateAuthToken();

    res.status(201).send({ user, token, message: "New Account Created!" });
  } catch (e) {
    console.log(e);
    if (user.password.length < 8) {
      res.status(500).send({
        message: "Password needs to be more than 8 characters",
      });
    } else if (e.keyPattern.username === 1) {
      res.status(500).send({ message: "Username already taken" });
    } else {
      res.status(500).send({ message: "Something went wrong" });
    }
  }
});

// Login user
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();

    res.status(200).send({ user, token });
  } catch (e) {
    res.status(500).send({ message: "Unable to log in" });
  }
});

// Logout user
router.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
      //["x-auth-token"])
    });
    await req.user.save();

    res.send({ message: "Logged out" });
  } catch (e) {
    res.status(500).send(e);
  }
});

// Get user details
router.get("/user/me", auth, async (req, res) => {
  res.send(req.user);
});

// Delete user
router.delete("/user/delete", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send({
      message:
        "Your account was deleted along with all your data successfully",
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;











/*const expreess =require("express")

const User = require("../models/user")

const auth = require("../middlewares/auth")

const router = new express.Router();

//create user
router.post("/users/create", async (req, res) => {
    const user = new User (req.body)
    try{
       await user.save();

        const token = await user.generateAuthToken();

         res.status(201).send({user, token, message: "New Account Created!"})
    }
    catch(e){
        console.log(e);
        if (user.password.length < 8) {
            res.status(500).send({
                message: "password need to be more than 8 characters"
            })      
        }
        else if(e.keyPattern.username == 1) {
            res.status(500).send({message:"Username already taken"})
        }
        else{
            res.status(500).send({message:"something went wrong"});
        }
    }
});

//login user
router.post("/user/login", async (req, res) => {
      try {
        const user=await User.findByCredentials(req.body.email, req.body.password)

        const token = await user.generationAuthToken()

        res.status(200).send({user, token});
      }
      catch(e){
        res.status(500).send({message: "unable to post"})
      }

});


//logout user

router.post("user/logout", auth, async(req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
                //["x-auth-token"])
        }) 
        await req.user.save();

        res.send({message: "logged out"})
    }
     catch(e) {
        res.status(500).send(e);
     }
})

//get user details

router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
})

//delete user
router.delete("/user/delete", auth, async (req, res) => {
    try{
        req.user.remove()
        res.send({
            message:"your account was deleted along with all your data successfully"})
    }
      catch(e){
        res.status(500).send(e);
      }
})

module.exports = router; */