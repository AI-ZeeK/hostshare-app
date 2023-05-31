import { Injectable } from '@nestjs/common';
const dataPath: any = './public/Hostshare.json';
import * as fs from 'fs';
import { CategoriesType } from './DTO/categories.dto';
@Injectable()
export class AppService {
  jsonData = fs.readFileSync(dataPath, 'utf-8');
  parsedData = JSON.parse(this.jsonData);

  getCategories(): Promise<CategoriesType[]> {
    return this.parsedData.categories;
  }
  getDatas(): Promise<any[]> {
    return this.parsedData.data;
  }
  getImages(): any {
    try {
      return this.parsedData.data.map((dat) => {
        return dat.info.images.data;
      });
    } catch (error) {
      return new Error('error');
    }
  }
}
