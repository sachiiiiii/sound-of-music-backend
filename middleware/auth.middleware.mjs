import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    // Extract JWT from authorization header if client sends header as Bearer <token>
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (token == null) {
        return res.sendStatus(401); // Unauthorized if there is no token
    }

    // Check if token is valid
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // 403 Forbidden error if token is invalid
        }
        req.user = user; // Attach the user payload to the request object if token is valid
        next(); // Proceed to the next middleware or route handler
    });
};

export default authenticateToken;