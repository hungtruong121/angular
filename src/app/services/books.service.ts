import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books} from '../models/books';
import { Time } from '@angular/common';

const API_URL = 'http://192.168.2.138';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Books[] = [];
  constructor(
    public http: HttpClient
  ) { }

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(`${API_URL}/books`);
  }

  getBookById(id: number): Observable<Books> {
    return this.http.get<Books>(`${API_URL}/book/${id}`);
  }

  add(book: Books): Observable<Books> {
  return this.http.post<Books>(`${API_URL}/book/create`, {
    id: book.id,
    version: book.version,
    isbn: book.isbn,
    name: book.name,
    description: book.description,
    picture: book.picture,
    price: book.price,
    vat: book.vat,
    author: book.author,
});
}

  update(book: Books): Observable<Books> {
  return this.http.put<Books>(`${API_URL}/book/${book.id}`, {
  id: book.id,
      version: book.version,
      isbn: book.isbn,
      name: book.name,
      description: book.description,
      picture: book.picture,
      price: book.price,
      vat: book.vat,
      author: book.author,
  });
  }

  delete(id: number): Observable<Books> {
  return this.http.delete<Books>(`${API_URL}/book/${id}`);
  }
}
