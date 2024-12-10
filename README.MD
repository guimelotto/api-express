# Node.js API with Express and TypeScript

This project is a simple Node.js API built with Express and TypeScript, based on the layered architecture. Below is an overview of the project structure, key features, and usage instructions.

---

## 📁 Project Structure

### Root Files

- **`.env`**: Configuration file for environment variables.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: Contains project metadata and dependencies.
- **`tsconfig.json`**: Configuration file for TypeScript.

### `src/` Directory

#### 1. **`controllers/`**

Handles incoming HTTP requests and returns appropriate responses.

- **`UserController.ts`**: Manages user-related operations such as:
  - Fetching all users.
  - Fetching a user by ID.
  - Creating a new user.

#### 2. **`middlewares/`**

Contains middleware functions for Express.

- **`errorHandler.ts`**: Generic middleware for handling errors.

#### 3. **`models/`**

Defines TypeScript interfaces and types.

- **`User.ts`**: Specifies the `User` interface.

#### 4. **`repositories/`**

Handles data interactions and operations.

- **`UserRepository.ts`**: Manages user data operations:
  - Fetching all users.
  - Fetching a user by ID.
  - Creating a new user.

#### 5. **`routes/`**

Defines application route mappings.

- **`userRoutes.ts`**: Routes for user-related operations.

#### 6. **`services/`**

Contains business logic and service classes.

- **`UserService.ts`**: Provides services for:
  - Fetching all users.
  - Fetching a user by ID.
  - Creating a new user.

#### 7. **`index.ts`**

The entry point of the application. It:

- Sets up the Express server.
- Configures middleware.
- Defines routes.
- Integrates error handling.

---

## 📜 Scripts

Defined in the `package.json` file for common tasks:

- **`dev`**: Runs the app in development mode with `ts-node-dev` for hot-reloading.
- **`build`**: Compiles TypeScript to JavaScript.
- **`start`**: Starts the compiled JavaScript application.

---

## 🚀 Running the Project

### 1. Install Dependencies

```bash
npm install
```

### 2. Run in Development Mode

```bash
npm run dev
```

### 3. Build the Project

```bash
npm run build
```

### 4. Start the Compiled Application

```bash
npm start
```

This project provides a basic structure for building a RESTful API with Node.js, Express, and TypeScript, following the principles of layered architecture.
