# Sound of Music App API - Backend

## About

This backend API serves as the data hub for "The Sound Of Music App", providing endpoints to manage information about characters, songs, and locations from the beloved musical. It handles data storage, retrieval, creation, updating, and deletion, and implements user authentication to secure certain administrative functionalities.

## [Frontend Repository](https://github.com/sachiiiiii/sound-of-music-frontend)

## Technologies Used
* **Node.js:** JavaScript runtime environment for server-side development.
* **Express.js:** Minimalist web application framework for Node.js.
* **MongoDB:** NoSQL database for flexible data storage.
* **Mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.
* **dotenv:** Load environment variables from a `.env` file.
* **cors:** Middleware to enable Cross-Origin Resource Sharing.
* **bcrypt:** Library for hashing passwords securely.
* **jsonwebtoken (JWT):** Library for creating and verifying JSON Web Tokens for user authentication.
* **body-parser:** Middleware for parsing Node.js bodies.

## Installation
Follow these steps to set up the backend application locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sachiiiiii/sound-of-music-backend
    cd som-backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    * Create a `.env` file in the root directory of your project.
    * Add the following environment variables. Replace the placeholders with your actual values:

        ```env
        ATLAS_URI=your_mongodb_connection_string_here
        PORT=3000 # Or your preferred port
        JWT_SECRET=your_very_strong_and_secret_key_here # Use a strong, long, and truly random secret
        ```

    * **Important:** Ensure you replace `your_mongodb_connection_string_here` with the connection string to your MongoDB database and `your_very_strong_and_secret_key_here` with a strong, randomly generated secret key in order to implement JWT. Use a [cryptographically secure random number generator](https://cryptobook.nakov.com/secure-random-generators/secure-random-generators-csprng) (CSPRNG) to generate one.

4.  **Run the backend server:**

    ```bash
    nodemon server.mjs
    ```

    The server should start running on the port specified in your `.env` file (default is 3000). You should see "Connected to MongoDB through Mongoose" logged to your console if the database connection is successful.

**Note:** Since user authentication is not as secure, clear your browser's localStorage for user authentication.

## API Endpoints
The backend API provides the following main endpoints:

* `/api/characters`:
    * `GET`: Retrieves all characters.
    * `GET/:id`: Retrieves a specific character by ID.
    * `POST`: Creates a new character (requires authentication).
    * `PUT/:id`: Updates an existing character by ID (requires authentication).
    * `DELETE/:id`: Deletes a character by ID (requires authentication).
* `/api/songs`:
    * `GET`: Retrieves a list of all songs.
    * `GET/:id`: Retrieves a specific song by ID.
    * `POST`: Creates a new song (requires authentication).
    * `PUT/:id`: Updates an existing song by ID (requires authentication).
    * `DELETE/:id`: Deletes a song by ID (requires authentication).
* `/api/locations`:
    * `GET`: Retrieves a list of all locations.
    * `GET/:id`: Retrieves a specific location by ID.
    * `PUT/:id`: Updates an existing location by ID (requires authentication).
* `/api/auth`:
    * `POST/register`: Registers a new user.
    * `POST/login`: Logs in an existing user and returns a JWT.

**Note:** The endpoints for creating, updating, and deleting resources are protected by JWT authentication. You must include a valid JWT in the `Authorization` header (as a Bearer token) to access these routes.

## Resources and Credits
The development of this backend API was guided by many resources, including:

* **Express.js Documentation:** [https://expressjs.com/](https://expressjs.com/) - For understanding the core concepts and functionalities of the Express framework.
* **Mongoose Documentation:** [https://mongoosejs.com/](https://mongoosejs.com/) - For learning how to interact with MongoDB using Mongoose, including schema definition, data modeling, and querying.
* **jsonwebtoken (JWT) Documentation:** [https://jwt.io/](https://jwt.io/) and the [npm package documentation](https://www.npmjs.com/package/jsonwebtoken) - For understanding and implementing JSON Web Token based authentication.
* **bcrypt npm package:** [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/bcrypt) - For securely hashing passwords.
* **body-parser npm package:** [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt) - For parsing Node.js bodies.
* **dotenv npm package:** [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables.
* **nodemon:** [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon) - For developing Node.js based applications
* **Axios npm package:** [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios) - While primarily used in the frontend, understanding HTTP requests and responses is crucial for backend development.

I would like to thank the creators and maintainers of these technologies and their documentation, which were invaluable in building this application.

I would also like to acknowledge the knowledge and guidance my instructors Tishana Trainor, Bryan Santos, and Constance Nwaigwe shared and gave.

## Future Plans
Future enhancements for this backend API may include:

* **More robust user authentication:** Implementing features like password reset, email verification - include email in registration as well, and potential integration with third-party authentication providers.
* **Input validation:** Adding more comprehensive validation for request bodies to ensure data integrity.
* **Pagination and filtering:** To efficiently handle large datasets linked to the character, song, and location endpoints.
* **Rate limiting:** Protecting the API from abuse by implementing rate limiting middleware.
* **API documentation:** Generating comprehensive API documentation using tools like Postman.
* **Role-based access control (RBAC):** Implementing various user roles with varying levels of access to administrative functionalities (creating, editing, and deleting).
* **Search functionality:** Adding the ability to search for characters, songs, and locations based on different criteria.
* **Scaling:** Expanding the application to include more data categories with more types information from the musical.

This is a comprehensive overview of the backend part of The Sound of Music App application. For any questions or issues, please refer to the  Resources & Credits section or contact [me](https://mail.google.com/mail/u/0/#inbox).