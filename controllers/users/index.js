const { registrationController } = require("./signup");
const { loginController } = require("./login");
const { logoutController } = require("./logout");
const { currentController } = require("./current");
const { subscriptionController } = require("./subscription");
const { avatarController } = require("./avatar");
const { verifyController } = require("./verify");
const { reVerifyController } = require("./reverify");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentController,
  subscriptionController,
  avatarController,
  verifyController,
  reVerifyController,
};
