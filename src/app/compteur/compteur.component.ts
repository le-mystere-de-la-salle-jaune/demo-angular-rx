import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-compteur',
  template: `
    <p>
      NB = {{nbPosts}}
    </p>
  `,
  styles: []
})
export class CompteurComponent implements OnInit {
  nbPosts = 0;

  constructor(private _postSrv: PostService) { }

  ngOnInit() {
    this._postSrv.newPost$.subscribe(newPost => {

      this.nbPosts++;

    });

  }
}
