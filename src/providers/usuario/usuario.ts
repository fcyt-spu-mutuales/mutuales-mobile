import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginRequest } from '../../models/LoginRequest';
import { LoginResponse } from '../../models/LoginResponse';
/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
    //
  }

  public login(request: LoginRequest): Promise<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:3000/api/users/login', request).toPromise();
  }
}
