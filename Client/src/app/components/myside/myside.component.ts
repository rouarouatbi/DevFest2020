import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myside',
  templateUrl: './myside.component.html',
  styleUrls: ['./myside.component.css']
})
export class MysideComponent implements OnInit {
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}


