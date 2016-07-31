import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { enableProdMode }                       from '@angular/core';
import { bootstrap }                            from '@angular/platform-browser-dynamic';
import { AppComponent }                         from './app/app.component';
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import { OAuthService }                         from 'angular2-oauth2/oauth-service';
import { OidcManager }                          from "./app/oauth2-components/OidcManager.service";
import { APP_ROUTER_PROVIDERS }                 from "./app.routes"  

//console.info('app.environment:', app.environment);
//if (app.environment === 'production') {
//  enableProdMode();
//}
bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), OidcManager, APP_ROUTER_PROVIDERS]);
