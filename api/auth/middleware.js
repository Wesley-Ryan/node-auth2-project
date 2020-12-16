const jwt = require("jsonwebtoken");
const secret = "foo";

const validator = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json("You must be logged in to view this page.");
  } else {
    console.log(token);
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).json(err.message);
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};

const validatePermissions = (user) => {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
};

module.exports = {
  validator,
  validatePermissions,
};
