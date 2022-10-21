const { getContacts } = require("../../services/contactsServices");

const getContactsController = async (req, res) => {
  const data = await getContacts();
  res.json({ data });
};

module.exports = {
  getContactsController,
};
