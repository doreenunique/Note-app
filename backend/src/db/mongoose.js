

const mongoose = require("mongoose");

const dbConnectUrl = "mongodb+srv://ailedoreen2unique:doreen@noteapp.fg6sisy.mongodb.net/noteapp?retryWrites=true&w=majority";

mongoose
  .connect(dbConnectUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));











//   const mongoose = require("mongoose")

// const dbConnectUrl =process.env.NOTER_MONGODB_URL

// mongoose.connect(dbConnectUrl, {
// useNewUrlParser: true,
// useUnifiedTopology:true,

// })