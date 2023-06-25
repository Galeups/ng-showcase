import { Injectable } from '@angular/core';
import { ProductForm } from '@core/models';
import { ProductApiService } from './product-api.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ProductService {
  readonly productId = Number(this.route.snapshot.params['id']);

  constructor(
    private readonly productApi: ProductApiService,
    private readonly route: ActivatedRoute
  ) {}

  getProduct() {
    return this.productApi.get(this.productId);
  }

  submit(product: Partial<ProductForm>) {
    console.log(product);
  }
}
