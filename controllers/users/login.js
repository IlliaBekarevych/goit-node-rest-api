const { login } = require("../../services/usersServices");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { token, userFind: user } = await login({ email, password });
  res.json({ token, user });
};

module.exports = {
  loginController,
};
