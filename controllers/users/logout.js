const { logout } = require("../../services/usersServices");

const logoutController = async (req, res) => {
  const { id } = req.user;
  await logout(id);
  res.status(204).json({ message: `Logout user: ${id}` });
};

module.exports = {
  logoutController,
};
