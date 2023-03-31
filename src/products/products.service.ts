// Сервис. Логика прилож.
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/creatу-product.dto';

// декор.`Инъекционный`, регистр serv как providers в model(app)
@Injectable()
export class ProductsService {
  // прост.масс.
  // private readonly products: CreateProductDto[] = [];
  private readonly products = [];

  // получ.масс.
  getAll(): any {
    return this.products;
  }

  // получ.по id с перебор.масс.
  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  // созд.ч/з dto для типов.дан., добав.ч/з спред нов.id
  create(productDto: CreateProductDto) {
    return this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }
}
