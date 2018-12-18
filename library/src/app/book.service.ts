import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Book} from './books/book'
import {BOOKS} from './books/mock-books'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor() { }

  getBooks(): Observable<Book[]>{
    return of(BOOKS);
  }
  getBook(id:number): Observable<Book>{
    return of(BOOKS.find(book=>book.id===id));
  }
}
