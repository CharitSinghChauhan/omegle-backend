import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./lib/auth";
import cors from "cors";

export const app = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
