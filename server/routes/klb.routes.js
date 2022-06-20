const ClassesController = require("../controllers/klb.controller");

module.exports = (app) => {
  app.get("/api", ClassesController.index);
  app.get("/api/classes", ClassesController.getAllWorkouts);
  app.get("/api/classes/:id", ClassesController.getWorkouts);
  app.post("/api/classes", ClassesController.createWorkouts);
  app.put('/api/classes/:id', ClassesController.updateWorkouts)
  app.delete('/api/classes/:id', ClassesController.deleteWorkouts)
}; 
