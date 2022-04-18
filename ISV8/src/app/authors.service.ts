import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Author, SaveAuthor } from './authors/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  url = 'http://localhost:28879/api/authors';
  // url = 'http://sidunp-001-site1.ctempurl.com/api/authors';
  constructor(private http: HttpClient) {}

  // GetAll / Return all records ()
  GetAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url);
  }
  // GetById / Return one record (id)
  GetById(id: Number): Observable<Author> {
    return this.http.get<Author>(this.url + '/' + id);
  }
  // Post / Add new record (body: obj)
  Add(author: SaveAuthor): Observable<Author> {
    return this.http.post<Author>(this.url, JSON.stringify(author), {
      headers: { 'content-type': 'application/json' },
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
