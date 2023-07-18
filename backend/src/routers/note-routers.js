const express = require("express");

const Note = require("../models/note");

const auth = require("../middlewares/auth");

const router = new express.Router();

// Create Notes
router.post("/notes/create", auth, async (req, res) => {
  const note = new Note({
    ...req.body, // Corrected Req to req
    owner: req.user._id,
  });

  try {
    await note.save();
    res.status(201).send({
      note,
      message: "Note saved",
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

// Get all notes
router.get("/notes/get", auth, async (req, res) => {
  try {
    await req.user.populate("notes").execPopulate(); // Added execPopulate()

    res.status(200).send(req.user.notes); // Corrected staus to status
  } catch (e) {
    res.status(500).send(e);
  }
});

// Get one note by id
router.get("/note/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById({ _id: req.params.id });
    if (!note) {
      return res.status(404).send({ message: "Note not found" });
    }
    res.send(note);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Delete one note
router.delete("/notes/:id", auth, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id }); // Corrected note to Note

    if (!note) {
      return res.status(404).send();
    }
    res.send({ message: "Note was deleted" });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;














// const express = require("express")

// const Note = require("../models/notes")

// const auth = require ("../middlewares/auth")

// const router = new express.Router()

// //create Notes
// router.post("/notes/create", auth, async(req, res) => {
//     const note = new Note({
//         ...Req.body,
//         owner: req.user._id,
//     });
  
//     try{
//         await note.save();
//           res.status(201).send({
//             note, message: "Note saved"
//         });
//     }
//       catch (e) {
//         res.status(500).send(e);
//       }
// });

// //get all notes
// router.get("/notes/get", auth, async (req ,res ) => {
//     try {
//         await req.user.populate("notes")

//         res.staus(200).send(req.user.notes)
//     }
//    catch(e) {
//     res.status(500).send(e)
//    }
// })


// //get one note by id
// router.get('/note/:id',auth, async  (req, res) => {
//     try {
//         const note = await Note.findById({_id: req.params.id})
//         if(!note) {
//             return res.status(404).send({message:'Note not found'})
//         }
//         res.send(note)

//     }
//     catch(e) {
//         res.status(500).send(e);
//     }
// });


// //delete one note
// router.delete("/notes/:id", auth, async (req, res) => {
//     try{
//         const note = await note.findOneAndDelete({_id: req.params.id})

//         if(!note) {
//             return res.status(404).send()
//         }
//         res.send({message: "Note was deleted"})
        
//     }
//     catch(e){
//         res.status(500).send(e)
//     }
// });

// module.export =router;

