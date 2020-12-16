const jwt = require("jsonwebtoken");

const secret = "foo";
function tokenCreator(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department,
  };
  const options = {
    expiresIn: "1000s",
  };
  return jwt.sign(payload, secret, options);
}

module.exports = tokenCreator;
