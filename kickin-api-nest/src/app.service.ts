import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

/* Explanation of the code above:
 * - @Injectable() makes AppService available for Nest dependency injection.
 * - getHello() currently returns a fixed greeting as scaffold placeholder
 *   logic; later feature services will hold KickIn's application rules.
 * - AppController calls this method when it handles GET /.
 */
