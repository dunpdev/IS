import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Author, SaveAuthor } from './authors/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  url = 'http://localhost:28879/api/authors';
  // url = 'https://sidunp-001-site1.ctempurl.com/api/authors';
  constructor(private http: HttpClient) {}

  // GetAll / Return all records ()
  GetAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
  // GetById / Return one record (id)
  GetById(id: Number): Observable<Author> {
    return this.http.get<Author>(this.url + '/' + id, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
  // Post / Add new record (body: obj)
  Add(author: SaveAuthor): Observable<Author> {
    return this.http.post<Author>(this.url, JSON.stringify(author), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
  // Put / Modify record (id, body: obj)
  Update(id: number, author: SaveAuthor): Observable<Author> {
    return this.http.put<Author>(this.url + '/' + id, JSON.stringify(author), {
      headers: { 'content-type': 'application/json' },
    });
  }
  // Delete / Remove record (id)
  Remove(id: Number): Observable<Author> {
    return this.http.delete<Author>(this.url + '/' + id);
  }
}
