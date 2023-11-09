import dotenv from 'dotenv';
import { createApp } from './app';

dotenv.config();

(async () => {
  const app = createApp();
  const port = parseInt(process.env.PORT ?? '8080');
  try {
    await app.listen({ port });
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
})();
