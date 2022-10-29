const { reVerify } = require("../../services/usersServices");

const reVerifyController = async (req, res) => {
  const result = await reVerify(req.body.email);

  if (result) {
    return res.status(200).json({ message: "Verification email sent" });
  }
  res.status(400).json({ message: "Verification has already been passed" });
};

module.exports = {
  reVerifyController,
};
