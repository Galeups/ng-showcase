import { Injectable } from '@angular/core';
import { ProductModule } from '../product.module';

@Injectable({ providedIn: ProductModule })
export class ProductApiService {
  constructor() {}
}
