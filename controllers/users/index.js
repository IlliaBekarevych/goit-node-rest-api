const { registrationController } = require("./signup");
const { loginController } = require("./login");
const { logoutController } = require("./logout");
const { currentController } = require("./current");
const { subscriptionController } = require("./subscription");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentController,
  subscriptionController,
};
