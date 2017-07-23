import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import  {Observable } from "rxjs";
import 'rxjs/add/operator/catch';

import {ErrorService} from "./errors/error.service";

import {BlogPost} from "./blog/blogpost-list/blogPost.model";

@Injectable()
export class BlogPostService {
  private URL: string = 'http://localhost:3000/blogpost/';

  constructor(private http: Http, private errorService: ErrorService) {
  }

  addBlogPost(blogPost: BlogPost) {
    const body = JSON.stringify(blogPost);
    const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.post(this.URL, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        const blogPost = new BlogPost(
          result.obj.title,
          result.obj.url,
          result.obj.date,
          result.intro,
          result.tags,
          result.image,
          result.template
        );
        return blogPost;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  getBlogPost(url: any) {
    return this.http.get(this.URL + url)
      .map((response: Response) => {
        const result = response.json();
        let blogPost = new BlogPost(
          result.obj.title,
          result.obj.url,
          result.obj.date,
          result.obj.intro,
          result.obj.tags,
          result.obj.image,
          result.obj.template
        );
        return blogPost;
      })
      .catch((error) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  getBlogPosts() {
    return this.http.get(this.URL)
      .map((response: Response) => {
        const result = response.json();
        let transformedBlogPosts: BlogPost[] = [];
        for (let blogPost of result.obj) {
          transformedBlogPosts.push(new BlogPost(
            blogPost.title,
            blogPost.url,
            blogPost.date,
            blogPost.intro,
            blogPost.tags,
            blogPost.image,
            blogPost.template
            )
          );
        }
        return transformedBlogPosts;
      })
      .catch((error) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  updateBlogPost(blogPost: BlogPost) {
    const body = JSON.stringify(blogPost);
    const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.put(this.URL, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        const blogPost = new BlogPost(
          result.obj.title,
          result.obj.url,
          result.obj.date,
          result.intro,
          result.tags,
          result.image,
          result.template
        );
        return blogPost;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  deleteBlogPost(blogPost: BlogPost) {
    return this.http.delete(this.URL + blogPost.url)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      })
  }
}
