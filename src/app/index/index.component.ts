import { Component, OnInit } from '@angular/core';
import { DidSiopService } from '../did-siop.service';
import { environment } from './../../environments/environment';
import { faChrome, faFirefox, faEdge, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss', './index.component.responsive.scss']
})
export class IndexComponent implements OnInit {
  did_siop_request: string;
  storesData = {
    chrome: {
      link: 'https://chrome.google.com/webstore/detail/did-siop/ondpkioapbcbamnjdimjfhaelgojblad?hl=en-US&gclid=EAIaIQobChMI8MWH0Pq46gIVig4rCh3qDwHKEAAYASAAEgJiiPD_BwE',
      icon: faChrome
    },
    edge: {
      link: 'https://microsoftedge.microsoft.com/addons/detail/didsiop/obkplhmcoocpddcaompifaciljjnclfk?hl=en-GB',
      icon: faFirefox
    },
    fireFox: {
      link: 'https://addons.mozilla.org/en-US/firefox/addon/did-siop/',
      icon: faEdge
    },
    drive: {
      link: 'https://drive.google.com/drive/folders/1vTUBK9G9A5rmZ_-ZojALi_j0oXoIqjgQ?usp=sharing',
      icon: faGoogleDrive
    }
  }

  constructor(public did_siop: DidSiopService) {
    this.did_siop_request = environment.did_siop_request;
  }

  ngOnInit(): void {
  }
}
