# E-commerce project

This is an online shop that contains products list with possibility for users to view it, add to the basket chosen items and once they are logged in proceed to checkout. Administrational part has functions to add, edit or delete products and maintain orders. 

This project follows the Model–View–Controller (MVC) architectural pattern to separate application logic into three main components:
  * Model – Handles data management and interaction with the MongoDB database.
  * View – Responsible for rendering the user interface using the EJS templating engine.
  * Controller – Contains the application logic and handles incoming requests, processes data, and returns responses.

The application uses Server-Side Rendering (SSR), where HTML pages are generated on the server and sent to the client. This approach improves initial page load performance and simplifies rendering dynamic content.

All application data, including users and products, is stored in a MongoDB database. The application uses the official MongoDB Node.js driver to handle database operations.
Sensitive information, such as user passwords, is securely hashed using bcrypt before being stored in the database to ensure user data protection.

The application includes several security mechanisms to protect user data and prevent common web vulnerabilities:
  * Password Hashing – Sensitive data such as passwords are hashed using bcryptjs.
  * CSRF Protection – The application uses csurf middleware to protect against Cross-Site Request Forgery (CSRF) attacks.
  * XSS Protection – Input handling and server-side rendering help mitigate Cross-Site Scripting (XSS) vulnerabilities.



## This project uses the following Node.js packages:

### 1. Express

`express` is a fast and minimalist web framework for Node.js used to build the server and handle HTTP requests, routing, and middleware.

```bash
npm install express
```

### 2. EJS

`ejs` (Embedded JavaScript) is a templating engine that allows you to generate HTML pages with dynamic content using JavaScript.

```bash
npm install ejs
```

### 3. MongoDB

`mongodb` is the official MongoDB driver for Node.js. It allows the application to connect to and interact with a MongoDB database.

```bash
npm install mongodb
```

### 4. Express Session

`express-session` is used to create and manage user sessions on the server. It stores session data between requests.

```bash
npm install express-session
```

### 5. Connect MongoDB Session

`connect-mongodb-session` is used to store Express session data in MongoDB instead of memory, making sessions persistent and scalable.

```bash
npm install connect-mongodb-session
```

### 6. bcryptjs

`bcryptjs` is a library used for hashing passwords before storing them in the database, improving security for user authentication.

```bash
npm install bcryptjs
```

### 7. CSURF

`csurf` provides CSRF (Cross-Site Request Forgery) protection by generating tokens that must be validated with each request.

```bash
npm install csurf
```

### 8. Multer

`multer` is middleware used for handling `multipart/form-data`, primarily for uploading files such as images.

```bash
npm install multer
```

### 9. UUID

`uuid` is used to generate unique identifiers which can be used for things like file names, tokens, or unique database keys.

```bash
npm install uuid
```

---

### Install All Dependencies

To install all dependencies listed in `package.json`:

```bash
npm install
```

---

