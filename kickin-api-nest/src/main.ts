import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
// Nest owns the long-running application promise after startup.
void bootstrap();

/* Explanation of the code above:
 * - The imports provide Nest's application factory and the root AppModule.
 * - bootstrap() creates the Nest application, then starts its HTTP server on
 *   PORT when set, or port 3000 otherwise.
 * - void bootstrap() starts that async setup without leaving its Promise
 *   unhandled according to the project's lint rules.
 */
