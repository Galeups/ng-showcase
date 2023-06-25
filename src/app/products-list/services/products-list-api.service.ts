import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MOCK_API_URL_TOKEN } from '../../core/tokens/mock-api-url.token';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product, Resource, ServerResponse } from '../../core/models';

@Injectable()
export class ProductsListApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(MOCK_API_URL_TOKEN) private readonly apiUrl: string
  ) {}

  getProducts(): Observable<Resource<Product[]>> {
    return this.http
      .get<ServerResponse<Product[]>>(`${this.apiUrl}/products`)
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
            isLoading: true,
            hasError: false,
            data: null,
          })
        )
      );
  }
}
