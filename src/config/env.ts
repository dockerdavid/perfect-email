import * as joi from 'joi';

import 'dotenv/config';

interface EnvVars {
  EMAIL_HOST: string;
  EMAIL_PORT: number;
  EMAIL_SECURE: boolean;
  EMAIL_USER: string;
  EMAIL_PASS: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
}

const envSchema = joi
  .object({
    EMAIL_HOST: joi.string().required(),
    EMAIL_PORT: joi.number().required(),
    EMAIL_SECURE: joi.boolean().required(),
    EMAIL_USER: joi.string().required(),
    EMAIL_PASS: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number().required(),
    DB_USER: joi.string().required(),
    DB_PASS: joi.string().required(),
    DB_NAME: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export default envVars;
