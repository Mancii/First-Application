import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
showSecret = false;
  log = [];

  constructor() {
    setTimeout(() => {this.allowServer = true; }
      , 2000);
  }

  allowServer = false;
  title = 'manci';
  serverStatus = 'No Server was Created';
  serverTestingName = 'Testing Server';
  serverCreated = false;

  emps: object = [
    {name: 'ahmed', salary: 2000, age: 20},
    {name: 'manci', salary: 3000, age: 30},
    {name: 'moka', salary: 4000, age: 40}
  ];

  toogle = true;
  serverName = 'manci';

  toogleButton() {
    this.toogle = !this.toogle;
  }
  onUpdatedServer(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  createServer() {
    this.serverCreated = true;
  }
  toogleBtn() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

  ngOnInit() {
  }

}
