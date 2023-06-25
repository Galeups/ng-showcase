import { Injectable } from '@angular/core';
import { responseSuccess } from '../models/mock-server-response';
import { MockProductDto } from '../models/mock-product-dto';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MockBackendService {
  private readonly mockProductsList = this.generateProducts();

  constructor() {}

  get(url: string) {
    if (url.includes('products')) {
      return this.getProducts();
    }

    return this.getProduct(url);
  }

  post<T extends MockProductDto>(url: string, body: T) {
    const productIndex = this.mockProductsList.findIndex(
      (product) => product.id === body.id
    );

    const newProductsList = [...this.mockProductsList];
    if (productIndex) {
      newProductsList[productIndex] = {
        ...newProductsList[productIndex],
        title: body.title,
        description: body.description,
      };
    }

    return responseSuccess(newProductsList);
  }

  delete(url: string) {
    return responseSuccess(true);
  }

  private getProducts() {
    return new HttpResponse({
      status: 200,
      body: responseSuccess(this.mockProductsList),
    });
  }

  private getProduct(url: string) {
    const id = Number(url.split('/').at(-1));
    const product = this.mockProductsList.find((product) => product.id === id);

    return new HttpResponse({
      status: 200,
      body: responseSuccess(product),
    });
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
