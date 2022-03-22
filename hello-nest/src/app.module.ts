import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerController } from './api-controller/api-controller.controller';
import { ServiceA } from './service-a';
import { ServiceB } from './service-b';

@Module({
  controllers: [AppController, ApiControllerController],
  providers: [AppService, ServiceA],
})
export class AppModule {}
