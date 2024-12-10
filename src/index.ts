import express, { Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

//Health check
app.use("/status", (req: Request, res: Response) => {
  res.send(`Node express server up and running! ${new Date().toISOString()}`);
});

// Middleware de erro genérico
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
