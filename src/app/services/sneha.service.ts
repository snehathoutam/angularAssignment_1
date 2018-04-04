import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Sneha } from '../models/sneha.model';
@Injectable()
export class SnehaService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getSneha(): Observable<Sneha[]> {
    return this.http.get<Sneha[]>(this.serviceUrl);
}
}