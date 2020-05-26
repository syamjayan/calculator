module.exports = function(app) {
  var arithmetic = require("./controllers/arithmeticController");
  // checking
  app.route("/arithmetic").get(arithmetic.calculate);
};
