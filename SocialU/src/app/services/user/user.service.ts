import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_URL_REDIS, HTTP_URL_MONGO } from 'src/app/models/httpStatus';
import { ModelUser } from 'src/app/models/ModelUser';
import { ModelInterest } from 'src/app/models/ModelInterest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  

  /**
   * getinterestList
   */
  public getInterestList(): Observable<Array<ModelInterest>> {
    return this.http.get<Array<ModelInterest>>(`${HTTP_URL_MONGO}themeInterest`);
  }

  /**
   * saveUser
   */
  public saveUser(user: ModelUser): Observable<any> {
    return this.http.post<any>(`${HTTP_URL_MONGO}user/saveUser`, user);
  }

  /**
   * iniciar sesion de usuario
   */

  public login(user:ModelUser): Observable<ModelUser> {
    return this.http.post<ModelUser>(`${HTTP_URL_MONGO}user/initSesion`,user);
  } 
}
