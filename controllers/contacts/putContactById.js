const { putContactById } = require("../../services/contactsServices");

const putContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  await putContactById(contactId, { name, email, phone });
  const data = await getContactById(contactId);
  res.json({ data });
};

module.exports = {
  putContactByIdController,
};
