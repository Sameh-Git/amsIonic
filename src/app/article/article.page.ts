import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../services/article.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  articles: any;
  constructor(public loginService: AuthenticationService, private service: ArticleService, private router: Router) { }

  ngOnInit() {



    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
   
  }


  deleteArticle(myObj) {
    this.service.deleteArticle(myObj).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    })
  }
  refreshListArticles() {

    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
      }
    );
    if(this.articles.size()==0){
    this.articles=null;}
  }
  updateArticle(myObj) {
    this.router.navigate(['update-article' + '/' + myObj['id']]);
  }

}
