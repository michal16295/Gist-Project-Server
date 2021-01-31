const users = require("../users/route");
const form = require("../form/route");

// This configs all routes
module.exports = function (app) {
  // All the APIs will go here

  app.use("/users", users);
  app.use("/form", form);
  app.use((req, res, next) => {
    res.status(404).send({ error: "Not found", data: null });
  });
};
