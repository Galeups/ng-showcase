import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MockBackendService } from '../../mocks/services/mock-backend.service';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  constructor(private readonly mockBackend: MockBackendService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('api/mock')) {
      if (request.method === 'GET') {
        return of(this.mockBackend.get(request.url));
      }
    }

    return next.handle(request);
  }
}
