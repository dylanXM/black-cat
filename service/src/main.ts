import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIPREFIX } from './config/main';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { createSwagger } from './common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置全局前缀
  app.setGlobalPrefix(APIPREFIX);
  // 允许跨域
  app.enableCors();
  // 设置全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 创建swagger
  createSwagger(app);
  await app.listen(3034);
}
bootstrap();
