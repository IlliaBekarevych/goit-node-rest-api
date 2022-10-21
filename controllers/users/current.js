const { currentUser } = require("../../services/usersServices");

const currentController = async (req, res) => {
  const { id } = req.user;
  const user = await currentUser(id);
  res.json({ user });
};

module.exports = {
  currentController,
};
