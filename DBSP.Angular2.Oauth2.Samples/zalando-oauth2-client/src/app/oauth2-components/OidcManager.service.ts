require("./oidc-token-manager");
declare let OidcTokenManager: any;

import { Injectable} from '@angular/core';

@Injectable()
export class OidcManager {
  private _config = {
    client_id: "tripgalleryimplicitAngular2",
    redirect_uri: "http://localhost:8080/callback",
    response_type: "id_token token",
    scope: "openid profile address gallerymanagement roles",
    authority: "https://localhost:44317/identity"
  };

  private _mgr: any;

  constructor() {
    this._mgr = new OidcTokenManager(this._config);
  }

  public get mgr() {
    return this._mgr;
  }
}
