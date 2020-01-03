import jwt from "jsonwebtoken";

import constants from "../config/constants";
import User from "../models/User";

export async function reqAuth(user) {
  if (!user || !user._id) {
    throw new Error("Unauthorized");
  }
}

export function decodeToken(token) {
  const arr = token.split(" ");

  if (arr[0] === "Checkit") {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  } else {
    throw new Error("Token is not valid!");
  }
}
