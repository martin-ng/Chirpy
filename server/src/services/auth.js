import jwt from "jsonwebtoken";

import constants from "../config/constants";

export function decodeToken(token) {
  const arr = token.split(" ");

  if (arr[0] === "Bearer") {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  } else {
    throw new Error("Token is not valid!");
  }
}
