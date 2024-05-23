import pino from 'pino';

import { Env } from './Env';

let options = {};

const currEnv = process.env.NODE_ENV;

if (Env.LOGTAIL_SOURCE_TOKEN) {
  options = {
    transport: {
      target: '@logtail/pino',
      options: { sourceToken: Env.LOGTAIL_SOURCE_TOKEN },
    },
  };
} else {
  options = {
    transport:
      currEnv === 'development'
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
            },
          }
        : undefined,
  };
}

export const logger = pino(options);
