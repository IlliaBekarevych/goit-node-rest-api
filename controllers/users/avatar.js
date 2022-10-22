const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { updateAvatar } = require("../../services/usersServices");

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const avatarController = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const avatarName = `${id}_${originalname}`;
  await Jimp.read(tempUpload)
    .then((image) => {
      return image
        .autocrop()
        .cover(
          250,
          250,
          Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE
        )
        .quality(60)
        .writeAsync(tempUpload);
    })
    .catch((error) => {
      console.log(error);
    });
  try {
    const resultUpload = path.join(avatarsDir, avatarName);
    await fs.rename(tempUpload, resultUpload);
    const newAvatarUrl = path.join("public", "avatars", avatarName);
    const url = await updateAvatar(req.user.id, newAvatarUrl);
    return res.status(200).json({ avatarURL: url });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = {
  avatarController,
};
