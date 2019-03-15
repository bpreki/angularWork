import { Component, OnInit } from '@angular/core';

@Component({
    // selector: 'app-server',                select element
    // selector: '[app-servers]',             select attribute
  selector: '.app-servers',                // select Class        cannot select by id in angular
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
