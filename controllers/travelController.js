const express = require('express');
const travels = express.Router();
const Travel = require('../models/travelModel')


// We are going to need to fix the other routes but for now this
// one will work to pull up the info from the back end!

// GET INDEX OF TRAVEL
travels.get('/', (req,res)=> {
  Travel.find({},(error,foundTravels)=> {
    if (error) {
      res.status(400).json({error: error.message})
    } else {
      res.status(200).json(foundTravels)
    }
  })
})

// Create a Travel Destination
travels.post('/', (req,res)=> {
  Travel.create(req.body,(error, createdTravel) => {
    if(error){
      res.status(400).json(error)
    } else {
      res.status(200).json(createdTravel);
    }
  })
})


//DELETE ROUTE (Getting rid of an entry)
travels.delete('/:id', (req,res)=> {
  Travel.findByIdAndDelete(req.params.id, (error,deletedTravel)=> {
    if(error){
      res.status(400).json({error: error.message})
    } else if (deletedTravel === null) {
      res.status(404).json({message: 'Travel ID Not Found'})
    } else {
      res.status(200).json({message: 'Hello, ' + deletedTravel.city + ' has been DELETED!'})
    }

  })
})


// UPDATE (Update a Travel)
travels.put('/:id', (req,res)=> {
  Travel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,updatedTravel)=> {
        if (error) {
          res.status(400).json({ error: error.message})
        } else {
          res.status(200).json({
            message: `Travel Destination ${updatedTravel.id} updated succesfully`,
            data: updatedTravel
          })
      }
  })
})


//
// //PATCH -- (add ass a favorite destination)
// travels.patch('/addlikes/:id', (req,res)=>{
//   Travel.findByIdAndUpdate(req.params.id, { $inc: {likes:1}}, {new:true}, (error, updatedtravel)=> {
//     if (error) {
//       res.status(400).json({error: error.message})
//     } else {
//       res.status(200).json({data: updatedtravel})
//     }
//
//   })
// })
//

module.exports = travels;
