const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");
const {
  addContactValidation,
  putContactValidation,
  updateStatusValidation,
} = require("../../middlewares/validationMiddleware");
const { asyncWrapper } = require("../../helpers/apiHelpes");

router
  .route("/")
  .get(asyncWrapper(ctrl.getContactsController))
  .post(addContactValidation, asyncWrapper(ctrl.addContactController));

router
  .route("/:contactId")
  .get(asyncWrapper(ctrl.getContactByIdController))
  .delete(asyncWrapper(ctrl.deleteContactByIdController))
  .put(putContactValidation, asyncWrapper(ctrl.putContactByIdController));

router
  .route("/:contactId/favorite")
  .patch(
    updateStatusValidation,
    asyncWrapper(ctrl.updateStatusContactController)
  );
module.exports = router;
