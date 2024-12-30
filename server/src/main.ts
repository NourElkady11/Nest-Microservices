import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('DB1:', process.env.DB1); // Debug
  console.log('DB2:', process.env.DB2); // Debug

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();



