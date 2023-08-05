const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(404).json({ msg: "Auth token required" });
  }

  // Create array from the authorization header
  // and get the second item which is the token
  //                        0       1
  // e.g. authorisation: bearer 123f43365324
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request not authorised" });
  }
};

module.exports = requireAuth;
