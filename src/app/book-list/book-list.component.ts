import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books = this.bookService.getBooks();
    
  deleteBook(id:number){
    for(var b of this.books){
      if(b.id==id){
        var index = this.books.indexOf(b);
        this.books.splice(index,1)
      }
    }
  }


  ngOnInit(): void {
  }

}
