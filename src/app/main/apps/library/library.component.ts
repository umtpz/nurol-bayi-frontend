import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  files = [
    { title: "Test", fileName: "test.pdf" },
    { title: "Test1", fileName: "test1.doc" },
    { title: "Test2", fileName: "test2.txt" }
  ]

  ngOnInit(): void {
  }

}
