const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId, // Corrected the property name here
      required: true,
      ref: "User", // ref to the user model in our case it is "user"
    },
  },
  {
    timestamps: true,
    toJSON: { virtual: true }, // Corrected "virtuals" to "virtual" here
  }
);

// Virtual for Note's URL based on ID and username of its author

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;










//const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema(
//   {
//     content: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     owner: {
//       type: mongoose.Schema.Types.ObjectId, // Corrected the property name here
//       required: true,
//       ref: "User", // ref to the user model in our case it is "user"
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: { virtual: true }, // Corrected "virtual" to "virtual" here
//   }
// );

// // Virtual for Note's URL based on ID and username of its author

// const Note = mongoose.model("Note", noteSchema);

// module.exports = Note;
// // const mongoose =  require("mongoose")

// // const noteSchema =  new mongoose.schema (
// //     {
// //     content: {
// //         type: String,
// //         required : true,
// //         trim: true
// //     },
// //     owner: {
// //         type: mongoose.Schema,types,ObjectId,
// //         required: true,
// //         ref:"User", //ref to the user model in our case it is "user" but
// //     },

// // },
// // {
// //     timestamps: true,
// //     toJSON: { virtual: true },
// // }

// // );
// // // Virtual for Note's URL based on ID and username of its author

// // const Note = mongoose.model("Note", noteSchema);

// // module.exports = Note;