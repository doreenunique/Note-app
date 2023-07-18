const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true, // remove leading and trailing spaces from the input string before validating it as a valid
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
},
{
  timestamps: true,
});

userSchema.virtual("notes", {
  ref: "Note",
  localField: "_id",
  foreignField: "owner",
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, process.env.NOTER_JWT_SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async function (username, password) {
  const User = this;

  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }
  // Generate authToken and save it in the database for future use

  return user;
};

userSchema.pre('save', async function(next){
  const user = this;

  if(user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;











   /*const mongoose = require("mongoose")
    const bcrypt = require("bcryptjs")
    const jwt = require("jsonwebtoken")

    const userSchema = new mongoose.Schema({
        username: {
            type:String,
            unique: true,
            required:true,
            trim : true
            // remove leading and trailing spaces from the input string before validating it as a valid
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        token: [
            {
                token: {
                    type: String,
                    required: none
                }
            }
        ]
    },
    {
        timestamps: true,
    }
    );
    userSchema.virtual("notes",{
        ref:"Note",
        localField:"_id",
        foreignField:"owner"
    });

    userSchema.methods.toJSON = function () {
        const user = this;
        const userObject = user.toObject();

        delete userObject.password;
        delete userObject.tokens;

        return userObject;
    };


    userSchema.methods.generateAuthToken = async function () {
        const user = this;
        const token = jwt.sign({_id: user.id.toString()}, process.env.NOTER_JWT_SECRET)

        user.token = users.tokens.concat({token})
        await user.save();

        return token;
    };

    userSchema.statics.findByCredentials = async (username.password); {
        
    const user = await User.findOne({username});

    if(!user) {
        throw new Error("unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("unable to login");
    }
    return user;
    };
        

    userSchema.pre('save', async function(next){
        const user = this;

        if(user.isModified("password")) {
            user.password = await bcrypt.hash(user.password, 8)
        }
        })

    const User = mongoose.model("User", userSchema);

    module.exports = User; 
    */