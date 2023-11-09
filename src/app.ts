import { join } from 'path';
import fastify from 'fastify';
import pino from 'pino';
import autoload from '@fastify/autoload';
import swagger from '@fastify/swagger';

export const createApp = () => {
  const app = fastify({ logger: pino({ level: 'debug' }) });

  app.register(autoload, { dir: join(__dirname, 'routes') });
  app.register(swagger);

  app.ready((err) => {
    if (err) throw err;
  });

  return app;
};
