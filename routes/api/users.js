const express = require("express");
const {
  postUserValidation,
  patchUserSubscriptionValidation,
} = require("../../middlewares/validationMiddleware");
const { userCtrl } = require("../../controllers");
const { asyncWrapper } = require("../../helpers/apiHelpes");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const upload = require("../../middlewares/uploadMiddleware");

const router = new express.Router();
router
  .route("/")
  .patch(
    patchUserSubscriptionValidation,
    authMiddleware,
    asyncWrapper(userCtrl.subscriptionController)
  );
router
  .route("/signup")
  .post(postUserValidation, asyncWrapper(userCtrl.registrationController));
router
  .route("/login")
  .get(postUserValidation, asyncWrapper(userCtrl.loginController));
router
  .route("/logout")
  .post(authMiddleware, asyncWrapper(userCtrl.logoutController));
router
  .route("/current")
  .get(authMiddleware, asyncWrapper(userCtrl.currentController));
router.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  asyncWrapper(userCtrl.avatarController)
);

router.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message:
      "Use api on routes: POST /users/registration, GET /users/login, POST /users/logout, GET /users/current",
    data: "Not found",
  });
});

module.exports = router;
