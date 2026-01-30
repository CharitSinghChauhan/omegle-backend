import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth";
import cors from "cors";
import dotenv from "dotenv";

export const app = express();
const port = 8000;

app.use(
  cors({
    origin: process.env.NEXT_FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
