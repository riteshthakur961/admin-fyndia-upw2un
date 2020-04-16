import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totUser = 560;
  totAd = 62;
  totClient = 54;
  totCities = 1;
  totArea = 2;

  constructor() { }

  ngOnInit() {
  }

}