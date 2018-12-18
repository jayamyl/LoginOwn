import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../books/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books:Book[]= [];
  constructor(private bookservice:BookService) { }

  ngOnInit() {
      this.getBooks();
  }

   getBooks(){
     this.bookservice.getBooks().subscribe(books=>this.books=books.slice(1,5));
   }
}
