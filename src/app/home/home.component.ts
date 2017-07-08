import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadData("<h1>Some H1 title</h1>");
  }

  @ViewChild('dataContainer') dataContainer: ElementRef;

  loadData(data) {
    this.dataContainer.nativeElement.innerHTML = data;
  }
}
