const { updateStatusContact } = require("../../services/contactsServices");

const updateStatusContactController = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  await updateStatusContact(contactId, favorite);
  const data = await getContactById(contactId);
  res.json({ data });
};

module.exports = {
  updateStatusContactController,
};
