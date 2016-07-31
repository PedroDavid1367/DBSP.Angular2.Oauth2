import { Component }     from '@angular/core';
import { OAuthService }  from 'angular2-oauth2/oauth-service';
import { OidcManager }  from "./OidcManager.service";

@Component({
  selector: 'oauth-test',
  template: require("./oauth-test.component.html")
})
export class OAuthTestComponent {
  private _mgr;

  constructor(private _oidcmanager: OidcManager) {
    this._mgr = this._oidcmanager.mgr;
  }

  public logOutOfIdSrv () {
    this._mgr.redirectForLogout();
  }

  public logout () {
    this._mgr.removeToken();
    window.location.href = "index.html";
  }

  public login () {
    this._mgr.redirectForToken();    
  }
}
