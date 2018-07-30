import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let p of posts">
        {{p.title}}
      </li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private _postSrv: PostService) { }

  ngOnInit() {
    this.posts = this._postSrv.listPosts();
  }

}
