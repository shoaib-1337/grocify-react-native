import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/app/lib/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
});
