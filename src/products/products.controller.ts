// Контролер. Раб.с запросами (перенаправ., парам., ..)
import {
  Header,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/creatу-product.dto';
import { UpdateProductDto } from './dto/update-product.dto copy';
import { Request, Response } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  // инъекционно добав.serv ч/з consrt(модиф.от TS, не измен., перем.: тип) - в this доступ к мтд. - this.productsService.getAll (/* readonly */)
  constructor(private readonly productsService: ProductsService) {}

  // декоратор Get + созд.мтд.getAll + декор.`перенаправить`(куда,стат.код) + req,res как из expresss (app.use((req,res,next)=>{res.status(201).end('Prob_0')})) с imp из express
  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll_0(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Prob_0');
  //   return 'getAll_0';
  // }

  @Get()
  getAll() {
    // return 'getAll';
    return this.productsService.getAll();
  }

  // Получ.парам. Get
  // 1ый способ. декор.с ожиданием (id) + мтд.с декор.Param(получ.св-во id в мтд.) сохр в перем.params
  // @Get(':id')
  // getOne(@Param() params) {
  //   return 'getOne ' + params.id;
  // }
  // 2ой способ. указ.какое св-во необходимо чтоб не получать весь объ. Можн.указ тип
  @Get(':id')
  getOne(@Param('id') id: string) /* : string */ {
    // return 'getOne ' + id;
    return this.productsService.getById(id);
  }

  // Post. С декор.Body получ парам из тела ч/з dto для типов.дан. + кастом.стат.код ч/з декор.HttpCode(/* цифр. - 201 */ /* конст. - HttpStatus*/) + добав.заголовок(назв.,знач.)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) /* : string */ {
    /* return */ this.productsService.create(createProductDto);
    return `Title: ${createProductDto.title} Price: ${createProductDto.price} id: ${createProductDto.id}`;
  }

  // Обнов.полн. Получ.2 парам. 1ый Body ч/з отделн.dto подобный CreateProductDto, 2ой id
  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id; /* `Update: ${updateProductDto}` + id; */
  }

  // Удал.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }
}
