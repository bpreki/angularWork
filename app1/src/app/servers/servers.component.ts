import { Component, OnInit } from '@angular/core';

@Component({
    // template:
    // selector: 'app-server',                select element
    // selector: '[app-servers]',             select attribute
  selector: '.app-servers',                // select Class        cannot select by id in angular
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testServer';
  serverCreated = false;
  servers = ['test', 'test1'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! the name of the server is: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
