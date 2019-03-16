import { Component } from '@angular/core';    // import decorator
import { getRenderedText } from '@angular/core/src/render3';

@Component({                                  // impiment decorator
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
    color: white;
    }
    `]
})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }
    
    getColor() {
        return this.serverStatus === 'offline' ? 'red' : 'green' ;
    }
}
