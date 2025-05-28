export const cookieConfig = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // Set to true in production
  sameSite: "Strict", // Adjust as needed
  maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
};
