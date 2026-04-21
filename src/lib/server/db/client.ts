import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Expo client bundles only expose EXPO_PUBLIC_* env vars at runtime.
// Keep DATABASE_URL as a fallback for Node scripts or future server usage.
const databaseUrl =
  process.env.EXPO_PUBLIC_DATABASE_URL ?? process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "Database URL is required. Set EXPO_PUBLIC_DATABASE_URL in your .env for Expo app runtime."
  );
}

const sql = neon(databaseUrl);

export const db = drizzle({ client: sql, schema });
