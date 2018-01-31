import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!!";
  serverName = '';
  serverCreated = false;
  username = '';
  userAdded = false;

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onAddUser(){
    this.userAdded = true;
    this.username = '';
  }
  userEmpty(){
    if(this.username === ''){
      return true
    }
    return false
  }

}
