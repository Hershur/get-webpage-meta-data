import { Injectable } from '@nestjs/common';
import got from 'got';
import cheerio from 'cheerio';
import { IPageResults } from './interfaces/page-results.interface';

@Injectable()
export class ParseUrlPageService {
  async parsedUrl(url: string): Promise<IPageResults> {
    let result: IPageResults = { status: '' };

    try {
      const response = await got(url);

      const $ = cheerio.load(response.body);
      const title = $('title').text();
      const img = $('img');
      const imgKeys = Object.keys(img);

      // console.log(img);

      const imgSizes = [];

      imgKeys.forEach((key, i) => {
        // console.log(key);
        if (img[key].name === 'img') {
          const imgWidth = +img[key]['attribs']['width'];
          const imgHeight = +img[key]['attribs']['height'];
          const imgSrc = img[key]['attribs']['src'];

          imgSizes.push({
            key: i,
            size: imgWidth * imgHeight,
            dimension: `${imgWidth} x ${imgHeight}`,
            src: imgSrc,
          });
        }
      });

      const largestImg = imgSizes.reduce(
        (prev, current) => {
          //   console.log('prev', current);
          return prev.size > current.size ? prev.src : current.src;
        },
        { size: 0 },
      );

      result = {
        status: 'success',
        pageTitle: title,
        largestImg: largestImg,
      };
    } catch (error) {
      result = { status: 'error', message: 'An error occured' };
    }

    return result;
  }
}
