import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

import { SendEmailModule } from './api/send-email/send-email.module';

import { envVars } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    SendEmailModule,
    MailerModule.forRoot({
      transport: {
        host: envVars.EMAIL_HOST,
        port: envVars.EMAIL_PORT,
        secure: envVars.EMAIL_SECURE,
        auth: {
          user: envVars.EMAIL_USER,
          pass: envVars.EMAIL_PASS,
        },
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envVars.DB_HOST,
      port: envVars.DB_PORT,
      username: envVars.DB_USER,
      password: envVars.DB_PASS,
      database: envVars.DB_NAME,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
