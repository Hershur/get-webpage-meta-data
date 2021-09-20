import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'A service that parses a URL and returns meta-data from that web page.';
  }
}
