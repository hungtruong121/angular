import { Component, OnInit} from '@angular/core';
import { Books } from '../../../models/books';
import { BooksService } from '../../../services/books.service';
import { Subscription } from 'rxjs';
import {NgbCalendar, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books-dashboard',
  templateUrl: './books-dashboard.component.html',
  styleUrls: ['./books-dashboard.component.css']
})

export class BooksDashboardComponent implements OnInit {
  booksToAdd: Books = new Books();
  booksToEdit: Books = new Books();
  today = this.calendar.getToday();
  public books: Books[] = [];
  public subscription: Subscription;
  public bookIDParam: number;
  id: number;
  name: number;
  // public userIDParam: number;
  constructor(
    private booksService: BooksService,
    private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.loadAllBooks();
  }

  loadAllBooks(){
    this.subscription = this.booksService.getAllBooks().subscribe((books: Books[]) => {
      this.books = books;
      this.books.sort((a, b) => (a.id > b.id) ? 1 : -1);
    });
  }
  addBook(){
    console.log(this.booksToAdd.id)
    this.subscription = this.booksService.add(this.booksToAdd).subscribe((message: Object) => {
      console.log(message);
      this.loadAllBooks();
    });
    this.booksToAdd.setEmpty();
  }
  deleteBook(id: number){
    const answer = window.confirm(`Delete Books ID ${id} ??`)
    if (answer) {
      this.subscription = this.booksService.delete(id).subscribe((message: Object) => {
        this.loadAllBooks();
      });
    }
  }
  passEditParams(book: Books){
    this.booksToEdit.id = this.booksToEdit.id;
    this.booksToEdit.version = this.booksToEdit.version;
    this.booksToEdit.isbn = this.booksToEdit.isbn;
    this.booksToEdit.name = this.booksToEdit.name;
    this.booksToEdit.description = this.booksToEdit.description;
    this.booksToEdit.picture = this.booksToEdit.picture;
    this.booksToEdit.price = this.booksToEdit.price;
    this.booksToEdit.vat = this.booksToEdit.vat;
    this.booksToEdit.author = this.booksToEdit.author;
  }

  editBooking(){
    this.subscription = this.booksService.update(this.booksToEdit).subscribe((message: Object) => {
      console.log(message);
      this.loadAllBooks();
    });
  }

}
