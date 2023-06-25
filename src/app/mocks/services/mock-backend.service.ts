import { Injectable } from '@angular/core';
import { responseSuccess } from '../models/mock-server-response';
import { MockProductDto } from '../models/mock-product-dto';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MockBackendService {
  constructor() {}

  get(url: string) {
    switch (url) {
      default:
        return new HttpResponse({
          status: 200,
          body: responseSuccess(this.generateProducts()),
        });
    }
  }

  post<T>(url: string, body: T) {
    return responseSuccess([]);
  }

  delete(url: string) {
    return responseSuccess(true);
  }

  private generateProducts(): MockProductDto[] {
    const products: MockProductDto[] = [];

    for (let i = 0; i < 8; i++) {
      products.push({
        description: '',
        id: Math.floor(Math.random() * 100),
        image: '',
        price: Math.floor(Math.random() * 10000),
        title: Math.floor(Math.random() * 100000).toString(),
      });
    }

    return products;
  }
}
