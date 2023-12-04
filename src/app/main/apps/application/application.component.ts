import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  page = 2
  pageSection = 3
  showPopup = false
  constructor() { }

  ngOnInit(): void {

  }

  nextPage() {
    if (this.page < 3) this.page++
    this.pageSection = 0
  }
  prevPage() {
    if (this.page > 0) this.page--
    this.pageSection = 0
  }
  toPage(page) {
    this.page = page
    this.pageSection = 0
  }
  nextPageSection() {
    if (this.pageSection < 3) this.pageSection++
  }
  prevPageSection() {
    if (this.pageSection > 0) this.pageSection--
  }
  hidePopup(){
    this.showPopup = false
  }
}
