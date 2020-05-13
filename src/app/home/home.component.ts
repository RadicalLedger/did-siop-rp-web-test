import { DidSiopService } from './../did-siop.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public did_user: string;
  public did_error: any;

  constructor(public did_siop: DidSiopService, location: Location) {
    let response = location.path(true).split('#')[1];
    did_siop.processResponse(response).then(result => {
      if(result.payload) this.did_user = result.payload.did;
      if(result.error) this.did_error = result;
      console.log(this.did_error);
    })
    .catch(err => {
      console.log(err);
    });
  }
  ngOnInit(): void {
  }
}
