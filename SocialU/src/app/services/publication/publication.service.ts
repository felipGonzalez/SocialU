import { HTTP_URL_CASSANDRA } from './../../models/httpStatus';
import { ModelPublication } from 'src/app/models/ModelPublication';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_URL_MONGO } from 'src/app/models/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  constructor(private http: HttpClient) { }

  public getPublicationList(): Observable<Array<ModelPublication>> {
    return this.http.get<Array<ModelPublication>>(`${HTTP_URL_CASSANDRA}publication`);
  }

  public savePublication(publication: ModelPublication): Observable<any> {
    return this.http.post<any>(`${HTTP_URL_MONGO}publication/savePublication`, publication);
  }

  public sendLike(publication: ModelPublication): Observable<any> {
    return this.http.post<any>(`${HTTP_URL_MONGO}publication/sendLike`, publication);
  }

  public saveComment(publication: ModelPublication): Observable<any>{
  return this.http.post<Array<ModelPublication>>(`${HTTP_URL_MONGO}publication/saveComments`, publication);
  }
}
