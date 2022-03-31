import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService:BookService, private router: Router) { }

  bookToBeAdded = this.bookService.getBookToBeAdded();

  addBook(){
    this.bookService.addBook(this.bookToBeAdded);
    this.router.navigate(['books']);
  }

  ngOnInit(): void {
  }

}
