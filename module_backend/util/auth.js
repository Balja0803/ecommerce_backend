import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "user token required",
    });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "user token wrong or inactive",
    });
  }
  return next();
};

export default verifyToken;
