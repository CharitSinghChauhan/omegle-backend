import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) throw new Error("Internal Server Error");

export const db = drizzle(process.env.DATABASE_URL);

