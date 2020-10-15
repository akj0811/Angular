import { Injectable } from '@angular/core';
import { FormData } from './formDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  fetchFormData(): Observable<FormData> {
    return this.http.get<FormData>('https://cs251-outlab-6.herokuapp.com/initial_values/');
  }

  postFormData(data: FormData) : Observable<FormData> {
    return this.http.post<FormData>('https://cs251-outlab-6.herokuapp.com/add_new_feedback/', data, this.httpOptions)
  }

}
