import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userside',
  templateUrl: './userside.component.html',
  styleUrls: ['./userside.component.css']
})
export class UsersideComponent implements OnInit {
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
