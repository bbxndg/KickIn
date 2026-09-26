import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

/* Explanation of the code above:
 * - @Controller() gives this controller the root route prefix: "/".
 * - Nest injects AppService through the constructor so the controller can
 *   delegate application work instead of building the response itself.
 * - @Get() maps an HTTP GET request to "/" to getHello(), which returns the
 *   string supplied by AppService.
 */
