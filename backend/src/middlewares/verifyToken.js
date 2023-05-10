import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log("AWDAWDWADW", token)
  if (!token) return res.status(401).json({ status: "ERROR", msg: "Tidak terautentikasi" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      verifyRefreshToken(next);
    }

    return res.status(403).json({ status: "ERROR", msg: "Token tidak valid!" })
  }
}

const verifyRefreshToken = (next) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).json({ status: "ERROR", msg: "refreshToken is missing" });

  try {
    const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);
    const newAccessToken = jwt.sign(decoded, process.env.SECRET_KEY);
    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000
    })
    req.userData = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) return res.status(401).json({ status: "UNAUTHORIZED", msg: "Sesi anda telah habis, silahkan login ulang!" });

    return res.status(403).json({ status: "ERROR", msg: "Refresh Token tidak valid!" })
  }
}

// const verifyRefreshToken = (decoded, next) => {
//   const user = Users.findOne({
//     _id: decoded._id,
//   });
//   const refreshToken = user.refreshToken;
//   if (!refreshToken) return res.status(401).json({ status: "ERROR", msg: "refreshToken is missing" });

//   try {
//     const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);
//     const newAccessToken = jwt.sign(decoded, process.env.SECRET_KEY);
//     res.cookie('accessToken', newAccessToken, {
//       httpOnly: true,
//       maxAge: 15 * 60 * 1000
//     })
//     req.userData = decoded;
//     next();
//   } catch (error) {
//     if (error instanceof jwt.TokenExpiredError) return res.status(401).json({ status: "UNAUTHORIZED", msg: "Sesi anda telah habis, silahkan login ulang!" });

//     return res.status(403).json({ status: "ERROR", msg: "Refresh Token tidak valid!" })
//   }
// }

// function verifyToken(req, res, next) {
//   const token = req.cookies.jwt;
//   if (!token) {
//     return res.status(401).json({ message: 'Token is missing' });
//   }

//   try {
//     const decodedToken = jwt.verify(token, secretKey);
//     req.currentUser = decodedToken;
//     next();
//   } catch (err) {
//     if (err instanceof jwt.TokenExpiredError) {
//       const refreshToken = req.cookies.refreshToken;
//       if (!refreshToken) {
//         return res.status(401).json({ message: 'Refresh token is missing' });
//       }

//       try {
//         const decodedRefreshToken = jwt.verify(refreshToken, secretKey);
//         const newAccessToken = generateAccessToken(decodedRefreshToken.user);
//         res.cookie('jwt', newAccessToken, { httpOnly: true, secure: true });
//         req.currentUser = decodedRefreshToken.user;
//         next();
//       } catch (err) {
//         return res.status(401).json({ message: 'Refresh token is invalid' });
//       }
//     } else {
//       return res.status(401).json({ message: 'Token is invalid' });
//     }
//   }
// }

// app.use(verifyToken);