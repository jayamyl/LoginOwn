import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Book} from './book';
import {BookService} from '../book.service';
@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./books.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private bookservice:BookService
  ) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks(){
    const id= +this.route.snapshot.paramMap.get('id'); 
    this.bookservice.getBook(id).subscribe(book=>this.book=book); 
  }
  goBack(): void {
    this.location.back();
  }
}
