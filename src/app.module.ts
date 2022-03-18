import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountModule } from './modules/count/count.module';


@Module({
  imports: [CountModule, CacheModule.register({
    isGlobal: true, //전역 모듈로 설정
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
