import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MOCK_API_URL_TOKEN } from '@core/tokens/mock-api-url.token';
import { catchError, map, of, startWith } from 'rxjs';
import {
  loadedResourceError,
  loadedResourceSuccess,
  loadResource,
  Product,
  ServerResponse,
} from '@core/models';

@Injectable()
export class ProductsListApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(MOCK_API_URL_TOKEN) private readonly apiUrl: string
  ) {}

  getProducts() {
    return this.http
      .get<ServerResponse<Product[]>>(`${this.apiUrl}/products`)
      .pipe(
        map((resolve) => loadedResourceSuccess(resolve.data)),
        startWith(loadResource<null>()),
        catchError(() => of(loadedResourceError<null>()))
      );
  }
}
