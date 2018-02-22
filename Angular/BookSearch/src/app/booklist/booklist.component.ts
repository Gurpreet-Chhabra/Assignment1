import { Component, OnInit } from '@angular/core';
import { BookListService} from './booklist.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

    books: any = [];
    constructor(private service: BookListService) {
      this.service.getBooks().subscribe(data=> {
          this.books = data.Books;
      });
    }

  ngOnInit() {
  }

}
