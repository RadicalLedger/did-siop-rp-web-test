import { Component, OnInit } from '@angular/core';
import { DidSiopService } from '../did-siop.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public did_siop: DidSiopService) { }

  ngOnInit(): void {
  }

  async didSIOPLogin() {
    let request = await this.did_siop.getRequest();
    window.open(request);
  }

}
