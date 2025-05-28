import { verify_token } from "../utils/helper";
export const authMiddleware = (req, res, next) => {
    const token=req.cookies.acess_token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }   
    try {
        const decoded = verify_token(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}
// This middleware checks for a valid JWT token in the request cookies.
// If the token is valid, it decodes the user information and attaches it to the request object.
// If the token is missing or invalid, it responds with a 401 Unauthorized status.

// What are request cookies?

// When you log in, the server gives your browser a tiny token (a JWT) and tells it to “store this as a cookie.”