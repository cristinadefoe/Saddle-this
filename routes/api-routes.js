
var db = require("../models");

// Routes
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function (dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function (req, res) {

    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (dbTodo) {

      res.json(dbTodo);
    })
      .catch(function (err) {

        res.json(err);
      });
  });

  app.delete("/api/todos/:id", function (req, res) {

    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTodo) {
      res.json(dbTodo);
    });

  });

  app.put("/api/todos", function (req, res) {

    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbTodo) {
        res.json(dbTodo);
      })
      .catch(function (err) {

        res.json(err);
      });
  });
};
