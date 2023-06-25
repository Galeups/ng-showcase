import { Injectable } from '@angular/core';
import { ProductForm } from '../../core/models';

@Injectable()
export class ProductService {
  constructor() {}

  submit(product: Partial<ProductForm>) {
    console.log(product);
  }
}
