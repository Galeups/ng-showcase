import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MOCK_API_URL_TOKEN } from '@core/tokens/mock-api-url.token';
import {
  loadedResourceError,
  loadedResourceSuccess,
  loadResource,
  Product,
  ServerResponse,
} from '@core/models';
import { catchError, map, of, startWith } from 'rxjs';
import { ProductPostDto } from '../models/product-post-dto';

@Injectable()
export class ProductApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(MOCK_API_URL_TOKEN) private readonly apiUrl: string
  ) {}

  get(productId: number) {
    return this.http
      .get<ServerResponse<Product>>(`${this.apiUrl}/product/${productId}`)
      .pipe(
        map((resolve) => loadedResourceSuccess<Product>(resolve.data)),
        startWith(loadResource<null>()),
        catchError(() => of(loadedResourceError<null>()))
      );
  }

  update(body: ProductPostDto) {
    return this.http.post<ServerResponse<Product[]>>('', body).pipe(
      map((resolve) => loadedResourceSuccess<Product[]>(resolve.data)),
      startWith(loadResource<null>()),
      catchError(() => of(loadedResourceError<null>()))
    );
  }
}
