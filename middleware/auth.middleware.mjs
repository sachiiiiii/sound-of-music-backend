import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    // Extract JWT from authorization header if client sends header as Bearer <token>
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (token == null) {
        return res.status(401).json({ message: 'No token provided' }); // Unauthorized if there is no token
    }

    // Check if token is valid
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            // 403 Forbidden error if token is invalid
            return res.status(403).json({ message: 'Invalid or expired token' }); 
        }
        req.user = user; // Attach the user payload to the request object if token is valid
        next(); // Pass control to the next middleware or route handler if everything goes well
    });
};

export default authenticateToken;