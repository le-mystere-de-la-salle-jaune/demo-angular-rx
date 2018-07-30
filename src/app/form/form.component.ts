import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-form',
  template: `
    <form>
      <label for="title">Titre</label>
      <input type="text" [(ngModel)]="newPost.title" name="title" id="title">

      <label for="content">Contenu</label>
      <input type="text" [(ngModel)]="newPost.content" name="content" id="content">
      <button (click)="createPost()">Créer</button>
    </form>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  newPost: Post = new Post(undefined, undefined);


  constructor(private _postSrv: PostService) { }

  ngOnInit() {
  }
  createPost() {
    this._postSrv.savePost(this.newPost);
  }
}
