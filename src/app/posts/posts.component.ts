import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DrugsService } from '../drug/drugs.service';
import { Drugs } from '../drug/drugsClass';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  drugs: Drugs[];
  constructor(private http: Http, private drugService: DrugsService) {}

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response.json();
      // console.log(this.posts);
    });
  }

  getDrugs() {
    this.drugs = this.drugService.getdrugs();
    console.log(this.drugs);
  }

}
