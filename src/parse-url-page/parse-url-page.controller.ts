import { Body, Controller, Get } from '@nestjs/common';
import { IPageResults } from './interfaces/page-results.interface';
import { IUrlInterface } from './interfaces/page-url.interface';
import { ParseUrlPageService } from './parse-url-page.service';

@Controller('parse-url-page')
export class ParseUrlPageController {
  constructor(private readonly parseUrlPageService: ParseUrlPageService) {}

  @Get()
  parseUrl(@Body() urlBody: IUrlInterface): Promise<IPageResults> {
    return this.parseUrlPageService.parsedUrl(urlBody.url);
  }
}
