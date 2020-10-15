import { Injectable } from '@angular/core';
import { FormData } from './formDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) { }

  fetchFormData(): Observable<FormData> {
    return this.http.get<FormData>('https://cs251-outlab-6.herokuapp.com/initial_values/');
  }

  postFormData(name: string, email: string, feedback: string, comment: string) {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('feedback', feedback);
      formData.append('comment', comment);
      this.http.post<any>('https://cs251-outlab-6.herokuapp.com/add_new_feedback/' , formData).subscribe((res) => {
        resolve(res);
      });
    });
  }

}
