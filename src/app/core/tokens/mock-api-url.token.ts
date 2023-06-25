import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export const MOCK_API_URL_TOKEN = new InjectionToken<string>(
  'Фейковый адрес API для мока бэкенда',
  {
    factory: () => `${environment.api}/mock`,
  }
);
