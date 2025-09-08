import { drizzle } from 'drizzle-orm/neon-http';

export const db = drizzle(process.env.PUBLIC_NEXT_DATABASE_URL);

