import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signupdata } from '../interfaces/usersenddata';
HttpClientModule
@Injectable({
  providedIn: 'root'

})
export class RegisterSerService {

  constructor(private _HttpClient: HttpClient) { }

  sendData(data:Signupdata): Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }
}
