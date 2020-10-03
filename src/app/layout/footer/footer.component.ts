import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  todayDate = new Date();
  currentYear = this.todayDate.getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
