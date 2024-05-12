import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signindata } from '../interfaces/usersenddata';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token = new BehaviorSubject('null');

  constructor(private _HttpClient: HttpClient) {

  }


  sendData(data:Signindata): Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
  }

  gettoken() {
    let x = localStorage.getItem('token');
    return x;
  }
}


