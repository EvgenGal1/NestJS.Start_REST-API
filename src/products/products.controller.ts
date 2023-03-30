import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/creatу-product.dto';
import { UpdateProductDto } from './dto/update-product.dto copy';

@Controller('products')
export class ProductsController {
  // декоратор Get + созд.мтд.getAll
  @Get()
  getAll(): string {
    return 'getAll';
  }

  // Получ.парам. Get
  // 1ый способ. декор.с ожиданием (id) + мтд.с декор.Param(получ.св-во id в мтд.) сохр в перем.params
  // @Get(':id')
  // getOne(@Param() params) {
  //   return 'getOne ' + params.id;
  // }
  // 2ой способ. указ.какое св-во необходимо чтоб не получать весь объ. Можн.указ тип
  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  // Post. С декор.Body получ парам из тела ч/з dto для типов.дан.
  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title: ${createProductDto.title} Price: ${createProductDto.price}`;
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
