
require("./oidc-token-manager");
declare let OidcTokenManager: any;

import { Component }     from '@angular/core';

@Component({
  selector: 'callback',
  template: require("./callback.component.html")
})
export class CallbackComponent {
  debugger;
  private _config = {
    client_id: "tripgalleryimplicitAngular2",
    redirect_uri: "http://localhost:8080/callback",
    load_user_profile: false,
    authority: "https://localhost:44317/identity"
  }

  private _mgr: any; 

  constructor() {
    this._mgr = new OidcTokenManager(this._config);
    // process the token
    this._mgr.processTokenCallbackAsync().then(function () {
      window.location.href = window.location.protocol + "//" + window.location.host + "/";
    },
    function (error) {
      alert("Problem Getting Token : " + (error.message || error));
      window.location.href = window.location.protocol + "//" + window.location.host + "/";
    });
  }
}
