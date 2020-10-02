import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConexionService {
  constructor(private http: HttpClient) {}

  saveUser(ObjJSON: any) {
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    };
    this.http
      .post<any>('https://jsonplaceholder.typicode.com/posts', ObjJSON, {
        headers,
      })
      .subscribe((data) => {
        return data;
      });
  }
}
