import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    new Post('article 1', 'contenu 1'),
    new Post('article 2', 'contenu 2'),
    new Post('article 3', 'contenu 3'),
  ];

  // création d'un magazine de nouveaux articles locaux
  private _subNewPost: Subject<Post> = new Subject();

  constructor(private _http: HttpClient) {
  }

  get newPost$(): Observable<Post> {
    return this._subNewPost.asObservable();
  }


  genererPosts(): Observable<Post> {

    const genPost$ = Observable.create(observer => {

      setTimeout(() => observer.next(new Post('gen 1', 'content 1')), 1000);
      setTimeout(() => observer.next(new Post('gen 2', 'content 2')), 2000);
      setTimeout(() => observer.next(new Post('gen 3', 'content 3')), 3000);
      setTimeout(() => observer.complete(), 4000);


      console.log('Observable execution');

    });

    return genPost$;
  }

  listPosts(): Observable<Post[]> {
    const posts$ = this._http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((postsExterne: any[]) => postsExterne.map(pE => new Post(pE.title, pE.body)))
      );
    return posts$;
  }

  savePost(post: Post): void {
    // publication aux abonnés du nouveau post
    this._subNewPost.next(Object.assign({}, post));
  }
}
