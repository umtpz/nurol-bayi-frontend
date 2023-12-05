import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  page = 2
  pageSection = 0
  showPopup = false
  showPaymentPlan = true
  paymentPlan = [
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],
    ["48.848","1.672","400","1.152"],

  ]
  constructor() { }

  ngOnInit(): void {

  }

  nextPage() {
    if (this.page < 3) this.page++
    this.pageSection = 0
    this.showPaymentPlan = false
  }
  prevPage() {
    if (this.page > 0) this.page--
    this.pageSection = 0
    this.showPaymentPlan = false
  }
  toPage(page) {
    this.page = page
    this.pageSection = 0
    this.showPaymentPlan = false
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
