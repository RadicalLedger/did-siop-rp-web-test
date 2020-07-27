import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import * as DID_SIOP from 'did-siop';

@Injectable({
  providedIn: 'root'
})
export class DidSiopService {

  private siop_rp: DID_SIOP.RP = undefined;

  async checkAndInit(){
    if(this.siop_rp === undefined){
        this.siop_rp = await DID_SIOP.RP.getRP(
          environment.redirect_uri, // RP's redirect_uri
          'did:ethr:0xB07Ead9717b44B6cF439c474362b9B0877CBBF83', // RP's did
          {
            "jwks_uri": "https://uniresolver.io/1.0/identifiers/did:example:0xab;transform-keys=jwks",
            "id_token_signed_response_alg": ["ES256K-R", "EdDSA", "RS256"]
          }
        )

        this.siop_rp.addSigningParams('CE438802C1F0B6F12BC6E686F372D7D495BC5AA634134B4A7EA4603CB25F0964'); // Private key

        /* 
        this.siop_rp.setSigningParams('CE438802C1F0B6F12BC6E686F372D7D495BC5AA634134B4A7EA4603CB28F0964'); // invalid Private key
        */
    }
  }

  async getRequest(): Promise<string>{
    await this.checkAndInit();
    return await this.siop_rp.generateRequest();
  }

  async processResponse(response: string): Promise<any>{
    await this.checkAndInit();
    return await this.siop_rp.validateResponse(response);
  }
}
