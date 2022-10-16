const { getContactById } = require("../../services/contactsServices");

const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const data = await getContactById(contactId);
  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json({ data });
};

module.exports = {
  getContactByIdController,
};
