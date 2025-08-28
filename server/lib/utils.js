import jwt from "jsonwebtoken";

// Function to generate user token
export const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  return token;
};
