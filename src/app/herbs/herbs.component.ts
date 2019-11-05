import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.sass']
})
export class HerbsComponent implements OnInit {
  herbs:any;
  constructor() { }

  ngOnInit() {
    this.herbs = [
      { english_name: "St. Joans Wort", latin_name: "Hypericum perforatum" }
    ];
  }

}
