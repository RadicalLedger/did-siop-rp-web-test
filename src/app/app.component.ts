import { DidSiopService } from './did-siop.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'did-siop-test-app';

  constructor(public did_siop: DidSiopService){

  }

  async didSIOPLogin(){
    let request = await this.did_siop.getRP().generateRequest();
    window.open(request);
  }
}
