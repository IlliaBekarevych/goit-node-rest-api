const { deleteContactById } = require("../../services/contactsServices");

const deleteContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  await deleteContactById(contactId);
  res.json({ message: "contact deleted" });
};

module.exports = {
  deleteContactByIdController,
};
