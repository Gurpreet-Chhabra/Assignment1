import { Component, OnInit } from '@angular/core';
import { Ng2FileInputService, Ng2FileInputAction } from 'ng2-file-input';
import { LocalForageService } from '../localForage.service';
import { LocalForageConfigService } from '../LocalForage.config.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comment: string;
  image: string;
  post = [];
  showCommentErrorMsg:boolean = false;
  showImageErrorMsg:boolean = false;
  constructor(private lfsService: LocalForageService, lfConfig: LocalForageConfigService , private router: Router) { }

  ngOnInit() {
  }
  postComment({value, valid }) {
      this.showCommentErrorMsg = false;
      this.showImageErrorMsg = false;
      if(!valid ) {
          if(!value.commentVal) {
            this.showCommentErrorMsg = true;
             return;
        }
      }
  if(value.imageVal && !(/\.(gif|jpg|jpeg|tiff|png)$/g).test(value.imageVal)) {
     this.showImageErrorMsg = true;
      return;
   }
     this.lfsService.getItem({key: 'post'}).then((data) => {
          if(data != null) {
              for(let i = 0; i < data.length; i++) {
                 this.post.push(data[i]);
              }
          }
          this.post.unshift({comment: this.comment,image: this.image , time: Date.now()});
          this.lfsService.setItem({key: 'post' , value: this.post}).then(()=> {
              this.router.navigate(['profile']);
          });
      });
  }
}
