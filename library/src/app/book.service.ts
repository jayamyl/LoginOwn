import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Book} from './books/book';
import {BOOKS} from './books/mock-books';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  private booksUrl = 'http://localhost:80/library_api/books.php';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    //return of(BOOKS);
    //return this.http.get<Book[]>(this.booksUrl);
    return this.http.get<Book[]>(this.booksUrl)
    .pipe(
      catchError(this.handleError('getBooks', []))
    );
  }
  getBook(id:number): Observable<Book>{
    return of(BOOKS.find(book=>book.id===id));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
