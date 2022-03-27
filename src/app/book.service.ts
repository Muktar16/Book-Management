import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[]=[{id:1,name:"Twilight",year:2004,availability:true},
  {id:2,name:"Software Engineering",year:2003,availability:false},
  {id:3,name:"The Alchemist",year:2004,availability:true},
  {id:4,name:"Teach yourself C",year:2003,availability:false},
  {id:5,name:"Database Management system Concept",year:2004,availability:true},
  {id:6,name:"Data Mining",year:2003,availability:false}]

  constructor() { }

  getBooks(): Book[]{
    return this.books;
  }
}
