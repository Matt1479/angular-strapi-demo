import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Page, StrapiDTO } from '../pages.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  title = 'pages';
  pagesDTO$: Observable<StrapiDTO> = null as any;
  pages$: Observable<Page[]> = null as any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.pagesDTO$ = this.http.get<StrapiDTO>(
      'http://localhost:1337/api/pages'
    );
    this.pages$ = this.pagesDTO$.pipe(
      map((dto: StrapiDTO) =>
        dto.data.map((value) => {
          let { title, content } = value.attributes;
          return {
            title,
            content,
          };
        })
      )
    );
  }
}
