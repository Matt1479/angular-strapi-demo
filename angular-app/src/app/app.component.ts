import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Page, StrapiDTO } from './pages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
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
