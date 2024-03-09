import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'json-read';

  studentData: any;

  url:string = './assets/users.json';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res=>{
      this.studentData = res;
    })
  }
}
