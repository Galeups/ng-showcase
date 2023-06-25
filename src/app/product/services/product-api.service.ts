import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MOCK_API_URL_TOKEN } from '@core/tokens/mock-api-url.token';
import { Product, Resource, ServerResponse } from '@core/models';
import { catchError, map, Observable, of, startWith } from 'rxjs';

@Injectable()
export class ProductApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(MOCK_API_URL_TOKEN) private readonly apiUrl: string
  ) {}

  getProduct(productId: number): Observable<Resource<Product>> {
    return this.http
      .get<ServerResponse<Product>>(`${this.apiUrl}/product/${productId}`)
      .pipe(
        map((resolve) => ({
          isLoading: false,
          hasError: false,
          data: resolve.data,
        })),
        startWith({
          isLoading: true,
          hasError: false,
          data: null,
        }),
        catchError(() =>
          of({
            isLoading: false,
            hasError: true,
            data: null,
          })
        )
      );
  }
}
