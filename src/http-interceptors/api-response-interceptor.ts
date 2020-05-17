import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { normalizeKeys } from 'object-keys-normalizer';
import { environment } from '@environment';

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      map((event) => {
        const e = event as HttpResponse<any>;
        if (!req.headers.has('x-meta-respect-original-key-name') && this.shouldNormalize(e.url) && e.body) {
          const body = normalizeKeys(e.body, 'camel');
          return e.clone({ body });
        } else {
          return event;
        }
      })
    );
  }
  private shouldNormalize(url: string): boolean {
    if (!url) {
      return false;
    }
    return environment.api.host === 'localhost'
      ? url.includes(`${environment.api.host}:${environment.api.port}`)
      : url.includes(environment.api.host);
  }
}
