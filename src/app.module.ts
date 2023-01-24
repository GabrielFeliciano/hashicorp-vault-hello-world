import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvService } from './env.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [AppController],
  providers: [EnvService],
})
export class AppModule {}
