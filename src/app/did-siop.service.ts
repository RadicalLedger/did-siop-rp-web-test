import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import * as DID_SIOP from 'did-siop';

@Injectable({
  providedIn: 'root'
})
export class DidSiopService {

  private siop_rp: any = undefined;

  async checkAndInit(){
    console.log(environment.production);
    if(this.siop_rp === undefined){
        this.siop_rp = await DID_SIOP.RP.getRP(
          environment.redirect_uri, // RP's redirect_uri
          'did:ethr:0xB07Ead9717b44B6cF439c474362b9B0877CBBF83', // RP's did
          {
            "jwks_uri": "https://uniresolver.io/1.0/identifiers/did:example:0xab;transform-keys=jwks",
            "id_token_signed_response_alg": ["ES256K-R", "EdDSA", "RS256"]
          }
        )

        this.siop_rp.addSigningParams(
          'CE438802C1F0B6F12BC6E686F372D7D495BC5AA634134B4A7EA4603CB25F0964', // Private key
          'did:ethr:0xB07Ead9717b44B6cF439c474362b9B0877CBBF83#owner', // Corresponding authentication method in RP's did document (to be used as kid value for key)
          DID_SIOP.KEY_FORMATS.HEX, //Format in which the key is supplied. List of values is given below
          DID_SIOP.ALGORITHMS['ES256K-R']
        );

        /* this.siop_rp.setSigningParams(
            'CE438802C1F0B6F12BC6E686F372D7D495BC5AA634134B4A7EA4603CB28F0964', // invalid Private key
            'did:ethr:0xB07Ead9717b44B6cF439c474362b9B0877CBBF83#owner', // Corresponding authentication method in RP's did document (to be used as kid value for key)
            DID_SIOP.KEY_FORMATS.HEX, //Format in which the key is supplied. List of values is given below
            DID_SIOP.ALGORITHMS['ES256K-R']
        ); */
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
