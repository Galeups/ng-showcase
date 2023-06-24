import { Injectable } from '@angular/core';
import { ProductsListModule } from '../products-list.module';

@Injectable({
  providedIn: ProductsListModule,
})
export class ProductsListApiService {
  constructor() {}
}
