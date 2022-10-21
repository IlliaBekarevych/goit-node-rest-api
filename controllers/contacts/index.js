const { getContactsController } = require("./getContacts");
const { addContactController } = require("./addContact");
const { getContactByIdController } = require("./getContactById");
const { deleteContactByIdController } = require("./deleteContact");
const { putContactByIdController } = require("./putContactById");
const { updateStatusContactController } = require("./updateStatusContact");

module.exports = {
  getContactsController,
  addContactController,
  getContactByIdController,
  deleteContactByIdController,
  putContactByIdController,
  updateStatusContactController,
};
