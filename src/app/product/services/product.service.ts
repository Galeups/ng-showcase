import { Injectable } from '@angular/core';
import { Product, ProductForm, Resource } from '@core/models';
import { ProductApiService } from './product-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ProductService {
  readonly productId = Number(this.route.snapshot.params['id']);

  constructor(
    private readonly productApi: ProductApiService,
    private readonly route: ActivatedRoute
  ) {}

  getProduct(): Observable<Resource<Product>> {
    return this.productApi.getProduct(this.productId);
  }

  submit(product: Partial<ProductForm>) {
    console.log(product);
  }
}
