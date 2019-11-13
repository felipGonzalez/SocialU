import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_URL_REDIS } from '../models/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any>{
    let postData = new FormData();
    postData.append('email', email);
    postData.append('email', password);
    return this.http.post<any>(HTTP_URL_REDIS, postData);
  }
}
