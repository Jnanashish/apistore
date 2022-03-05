
exports.removebg = (req, res) => {
  const { image } = req.body;
  const imageData = image.substring(image.indexOf(",") + 1);

  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file_b64", imageData);    
}