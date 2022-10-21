const { patchUserSubscription } = require("../../services/usersServices");

const subscriptionController = async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;
  const user = await patchUserSubscription(id, subscription);
  res.json({ user });
};

module.exports = {
  subscriptionController,
};
