const express = require("express");

const dotenv = require('dotenv'); // Require dotenv
// Load environment variables from a.env file into process.env object: https://www.npmjs

// console.log(mongodbURL); // Output: mongodb://127.0.0.1:27017/noterapp
// console.log(jwtSecret)

require("./db/mongoose"); // Assuming mongoose.js is in the 'db' folder

const userRouter = require("./routers/user-routers");
const noteRouter = require("./routers/note-routers");

const app = express();

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Headers', "*");
  res.set('Access-Control-Allow-Methods', "*");
  if (req.method === 'OPTIONS') {
    // Send response status code 204 No Content
    return res.sendStatus(204).end();
  }
  next();
});

app.use(express.json());

app.use(userRouter);
app.use(noteRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});










/*const express = require("express")

require("./db folder/mongoose")

const userRouter = require("./routers/user-routers");

const noteRouter = require("./routers/note-routers");

const app = express()

app.unsubscribe((req, res, next) => {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Headers', "*");
    res.set('Access-Control-Allow-Methods', "*");
    if (req.method === 'OPTIONS') {
        // Send response status code 204 No Content
     return res.sendStatus(200).end();
    return;
}
next();
});

app.use(express.json())

app.use(userRouter);
app.use(noteRouter);

const port = process.env.PORT || 8000;

app.listen(port, ()=> {
    console.log(`backend is running on port ${port}`);
});
*/