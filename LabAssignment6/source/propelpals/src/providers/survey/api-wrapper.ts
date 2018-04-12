import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs.
import { Observable } from "rxjs/Observable";
import { timeoutWith } from 'rxjs/operators';

@Injectable()
export class ApiWrapper {

    api: any;
    static baseURL = 'https://dxsurvey.com/api/MySurveys/';
    static ownerId = encodeURI("ownerId");
    static accessKey: string = "c0499c368aed4767bc35f46dc16e9925";

    constructor(public http: HttpClient) {
        const target = {};

        const handler = {
            get(target, name) {
              return Object.assign(
                {},
                [
                  'get',
                  'delete',
                  'head'
                ].reduce(
                  (o, method) => Object.assign({}, o, {
                    [method](endpoint = '', params = {}) {
                        if (typeof endpoint === 'object') {
                            params = endpoint;
                            endpoint = '';
                        }
                        let arrayParams = [];
                        for (let param in params) {
                            if ((param == 'ownerId') && (params[param] == true)) params[param] = ApiWrapper.ownerId;
                            if ((param == 'accessKey') && (params[param] == true)) params[param] = ApiWrapper.accessKey;
                            arrayParams.push(param + '=' + encodeURI(params[param]));
                        }
                        let strParams = arrayParams.join('&');
                        return http[method](ApiWrapper.baseURL + endpoint + '?' + strParams).pipe(
                            timeoutWith(5000, Observable.throw(new Error('Failed to get data.')))
                        );
                    }
                  }), {}),
                  [
                    'post',
                    'put',
                    'patch'
                  ].reduce(
                    (o, method) => Object.assign({}, o, {
                      [method](endpoint = '', body = {}, params = {}) {
                        if (typeof endpoint === 'object') {
                          params = body;
                          body = endpoint;
                          endpoint = '';
                        }
                        let arrayParams = [];
                        for (let param in params) {
                            if ((param == 'ownerId') && (params[param] == true)) params[param] = ApiWrapper.ownerId;
                            if ((param == 'accessKey') && (params[param] == true)) params[param] = ApiWrapper.accessKey;
                            arrayParams.push(param + '=' + encodeURI(params[param]));
                        }
                        let strParams = arrayParams.join('&');
                        return http[method](ApiWrapper.baseURL + endpoint + '?' + strParams).pipe(
                            timeoutWith(5000, Observable.throw(new Error('Failed to get data.')))
                        );
                      }
                    }), {})
              );
            }
          };

        this.api = new Proxy(target, handler);
    }
    
}
