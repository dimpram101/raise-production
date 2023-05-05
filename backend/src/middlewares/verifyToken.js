import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ status: "ERROR", msg: "Tidak terautentikasi" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) return res.status(401).json({ status: "ERROR", msg: "Sesi anda telah habis, silahkan login ulang!"});

    return res.status(403).json({ status: "ERROR", msg: "Token tidak valid!"})
  }
}