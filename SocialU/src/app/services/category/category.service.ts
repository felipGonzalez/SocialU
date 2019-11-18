import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelCategory } from 'src/app/models/ModelCategory';
import { Observable } from 'rxjs';
import { HTTP_URL_CASSANDRA, HTTP_URL_MONGO } from 'src/app/models/httpStatus';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * saveCategory
   */
  public saveCategory(category: ModelCategory):Observable<any> {
    return this.http.post<any>(HTTP_URL_CASSANDRA, category);
  }

  /**
   * loadCategory
   */
  public loadCategory(): Observable<Array<ModelCategory>> {
    return this.http.get<Array<ModelCategory>>(`${HTTP_URL_MONGO}loadCategory`);
  }
}
