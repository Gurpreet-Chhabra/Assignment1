import { Component, OnInit } from '@angular/core';
import {BookService} from './book.service';
import {Router , ActivatedRoute} from '@angular/router';
import {NgForage, NgForageConfig} from "@ngforage/ngforage-ng4";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

    book: any = {};
    comments: any = [];
    error: boolean = false;
    // comment: string;
    // newComment: object = {
    //     email: "",
    //     body: ''
    // };
    constructor(private route : ActivatedRoute, private router: Router , private service: BookService){

         if(this.route.params) {
             this.route.params.subscribe(book => {
                 this.service.getBook(book.id).subscribe(bookdata => {
                    if(bookdata.Error == "Book not found!") {
                        this.error = true;
                    }
                    else {
                        this.book = bookdata;
                    }
                 });
             });
         }
     }

    ngOnInit() {
    }

    saveData() {
        // localStorage.setItem('comments',{'body':this.newComment});
        // this.comments.push({
        //     body:  localStorage.getItem('comments'))
        // }
        // this.newComment = {
        //       email: "You",
        //       body: this.comment
        //   };

        // localStorage.setItem('comments',JSON.stringify(this.newComment));
        // let a = localStorage.getItem('comments');
        // this.comments.push(JSON.parse(a));
        // console.log(this.comments);
    }
    back() {
        // this.router.navigate(['book']);
    }

}
