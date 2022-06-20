const { response } = require("express");
const Workouts = require("../models/klb.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createWorkouts = (request, response) => {
  Workouts.create(request.body)
    .then((Workouts) => response.json(Workouts))
    .catch((err) => response.json(err));
};

module.exports.getAllWorkouts = (request, response) => {
  Workouts.find({})
    .then((workouts) => {
      console.log(workouts);
      response.json(workouts);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getWorkouts = (request, response) => {
  Workouts.findOne({ _id: request.params.id })
    .then((workouts) => response.json(workouts))
    .catch((err) => response.json(err));
};

module.exports.updateWorkouts = ( request, response) =>{
  Workouts.findByIdAndUpdate({_id: request.params.id}, request.body, {new:true})
  .then(updatedWorkouts => response.json(updatedWorkouts))
  .catch(err => response.json(err))
}

module.exports.deleteWorkouts = (request, response) => {
  Workouts.deleteOne({_id: request.params.id})
  .then(deleteConfirmation => response.json(deleteConfirmation))
  .catch(err => response.json(err))
}