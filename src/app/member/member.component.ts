import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/member').subscribe(data => {
      this.members = data;
    });
  }

}
