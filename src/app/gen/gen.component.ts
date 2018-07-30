import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-gen',
  template: `
    <p>
      {{post?.title}}
    </p>
  `,
  styles: []
})
export class GenComponent implements OnInit {

  post: Post;

  constructor(public _postSrv: PostService) { }

  ngOnInit() {

    this._postSrv.genererPosts().subscribe(
      value => this.post = value,
      error => console.log('oops', error),
      () => console.log('la boutique est fermée')
    );
  }

}
