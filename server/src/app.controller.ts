import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriesType } from './DTO/categories.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('categories/all')
  getcategories(): Promise<CategoriesType[]> {
    return this.appService.getCategories();
  }

  @Get('data/all')
  getdata(): Promise<any[]> {
    return this.appService.getDatas();
  }

  @Get('images/all')
  getImages(): Promise<any[]> {
    return this.appService.getImages();
  }
}
