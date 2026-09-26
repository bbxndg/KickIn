import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* Explanation of the code above:
 * - @Module() tells Nest how to assemble this part of the application.
 * - imports is currently empty; future feature modules can be registered here.
 * - controllers registers the HTTP request handler, while providers registers
 *   the injectable service used by that controller.
 * - main.ts passes AppModule to NestFactory to start the whole app.
 */
