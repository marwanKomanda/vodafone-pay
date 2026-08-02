module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({
    success: true,
    message: "Server is working perfectly",
    method: req.method
  });
};
