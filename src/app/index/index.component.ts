import { Component, OnInit } from '@angular/core';
import { DidSiopService } from '../did-siop.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  did_siop_request: string;

  constructor(public did_siop: DidSiopService) {
    this.did_siop_request = environment.did_siop_request;
  }

  ngOnInit(): void {
  }
}
