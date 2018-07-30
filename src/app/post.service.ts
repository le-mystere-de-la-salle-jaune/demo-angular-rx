import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    new Post('article 1', 'contenu 1'),
    new Post('article 2', 'contenu 2'),
    new Post('article 3', 'contenu 3'),
  ];

  constructor(private _http: HttpClient) {
  }

  listPosts(): Post[] {

    return this.posts;
  }

  savePost(post: Post): void {
    this.posts.push(post);
    console.log(this.posts);
  }
}
