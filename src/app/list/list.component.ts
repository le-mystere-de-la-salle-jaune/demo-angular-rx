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

    ---------
    <h1>Nouveaux articles locaux</h1>
    <ul>
    <li *ngFor="let p of newPosts">
      {{p.title}}
    </li>
  </ul>

    {{error}}
  `,
  styles: []
})
export class ListComponent implements OnInit {

  posts: Post[] = [];
  newPosts: Post[] = [];
  error: any;
  constructor(private _postSrv: PostService) { }

  ngOnInit() {
    this._postSrv.listPosts().subscribe(
      value => this.posts = value,
      error => this.error = error
    );

    this._postSrv.newPost$.subscribe(newPost => {
      this.newPosts.push(newPost);
    });
  }

}
