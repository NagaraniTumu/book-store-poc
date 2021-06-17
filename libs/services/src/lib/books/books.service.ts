import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  apiURL = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private httpClient: HttpClient) {}

  getBooks(searchString: string): Observable<Book[]> {
    const httpOptions = {
      headers: new HttpHeaders(),
    };
    return this.httpClient
      .get<Book[]>(this.apiURL + searchString, httpOptions)
      .pipe(map((response) => response['items']));
  }
}
