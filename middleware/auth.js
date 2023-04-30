const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) 
{
  //const token = req.header("token");
  const token = req.header("x-auth");
  console.log(token)
  if (!token) return res.status(401).json({ message: "Auth Error" });
  try 
  {
    const decoded = jwt.verify(token, "randomString", (err, decoded) => {
      if (err) return res.status(401).json({ message: "provied token not verifyed" });
      req.user = decoded;
      next();
    });
  } 
  catch (e) 
  {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};