const { verify } = require("../../services/usersServices");

const verifyController = async (req, res) => {
  const result = await verify(req.params.verificationToken);

  if (result) {
    return res.status(200).json({ message: "Verification successful" });
  }

  res.status(404).json({ message: "User not found" });
};

module.exports = {
  verifyController,
};
