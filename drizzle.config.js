import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import {}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.PUBLIC_NEXT_DATABASE_URL!,
  },
});
