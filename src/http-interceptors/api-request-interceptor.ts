import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { normalizeKeys } from 'object-keys-normalizer';
import snakeCase from 'lodash.snakecase';

import { environment } from '@environment';
import { EnvironmentInterface } from '../environments/environment.type';

// import { AuthService } from '../service'

@Injectable()
export class ApiRequestInterceptor implements HttpInterceptor {
  constructor() {} // private authSvc: AuthService,

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let requestUrl;
    let headers: HttpHeaders = req.headers;
    let body = req.body;
    let params = req.params;
    /* if (!!this.authSvc.get()){
      headers = headers.set('Authorization', this.authSvc.get());
    } */
    if (this.isInternalApiReq(req.url)) {
      requestUrl = `${this.buildHttpHost(environment)}/api/${req.url}`;
      params = this.toSnakeCaseParams(params);
      if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
        headers = headers.set('Content-Type', 'application/json');
        body = normalizeKeys(body, 'snake');
      }
    } else {
      requestUrl = req.url;
    }

    const newReq = req.clone({ headers, body, url: requestUrl, params });

    return next.handle(newReq);
  }

  private buildHttpHost(env: EnvironmentInterface): string {
    const scheme = env.api.ssl ? 'https' : 'http';
    const port = env.api.port !== 80 && env.api.port !== 443 ? `:${env.api.port}` : '';
    return `${scheme}://${env.api.host}${port}`;
  }
  private isInternalApiReq(url: string): boolean {
    // NOTE: scheme が指定されている場合は外部リクエストとして処理する
    return !/(^\.)/.test(url) && !/(http(s)?:\/\/+)/.test(url);
  }
  private toSnakeCaseParams(httpParams: HttpParams) {
    return httpParams.keys().reduce((params, key) => {
      const value = params.get(key);
      return params.delete(key).set(snakeCase(key), value);
    }, httpParams);
  }
}
