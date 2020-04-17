import { Injectable } from '@angular/core';
import * as DID_SIOP from '../assets/did-siop.bundle.js';

@Injectable({
  providedIn: 'root'
})
export class DidSiopService {

  private siop_rp: any;
  constructor() { 
    this.siop_rp = new DID_SIOP.RP();

    this.siop_rp.initialize(
      'localhost:8080/loginCallback.html', // RP redirect uri
      'did:ethr:0xB07Ead9717b44B6cF439c474362b9B0877CBBF83',// RP DID
      {
        "jwks_uri": "https://uniresolver.io/1.0/identifiers/did:example:0xab;transform-keys=jwks",
        "id_token_signed_response_alg": ["ES256K-R", "EdDSA", "RS256"]
      } // RP meta data
    );

    this.siop_rp.setSigningParams(
      'CE438802C1F0B6F12BC6E686F372D7D495BC5AA634134B4A7EA4603CB25F0964', //RP private key
      'did:ethr:0xB07Ead9717b44B6cF439c474362b9B0877CBBF83#owner',// RP public key uri for kid
      'ES256K-R'// Algorithm
    );
  }

  getRP(){
    return this.siop_rp;
  }
}
