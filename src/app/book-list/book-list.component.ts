import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService,private router: Router) { }

  books = this.bookService.getBooks();
    
  deleteBook(book: Book){
    this.books = this.bookService.deleteBook(book);
  }

  updateBook(book:Book){
    console.log(book);
    this.bookService.setBookToBeUpdated(book);
    this.router.navigate(['updateBook'])
  }

  ngOnInit(): void {
  }

}
