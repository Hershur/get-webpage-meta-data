import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ParseUrlPageController } from './parse-url-page/parse-url-page.controller';
import { ParseUrlPageService } from './parse-url-page/parse-url-page.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env',
    }),
  ],
  controllers: [AppController, ParseUrlPageController],
  providers: [AppService, ParseUrlPageService],
})
export class AppModule {}
