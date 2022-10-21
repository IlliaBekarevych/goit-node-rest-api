const { addContact } = require("../../services/contactsServices");

const addContactController = async (req, res) => {
  const { name, email, phone } = req.body;
  const data = await addContact({ name, email, phone });
  res.status(201).json(data);
};

module.exports = {
  addContactController,
};
