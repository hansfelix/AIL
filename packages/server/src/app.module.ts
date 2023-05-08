import { Module } from '@nestjs/common';
import { EvaluateModule } from './evaluate/evaluate.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    EvaluateModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', '/client'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
