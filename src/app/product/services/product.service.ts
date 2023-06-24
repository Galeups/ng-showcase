import { Injectable } from '@angular/core';
import { ProductForm } from '../models/product';

@Injectable()
export class ProductService {
  constructor() {}

  submit(product: Partial<ProductForm>) {
    console.log(product);
  }
}
