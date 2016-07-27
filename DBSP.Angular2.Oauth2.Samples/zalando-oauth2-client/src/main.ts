import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { enableProdMode }  from '@angular/core';
import { bootstrap }       from '@angular/platform-browser-dynamic';
import { AppComponent }    from './app/app.component';
import { disableDeprecatedForms, provideForms } from "@angular/forms";

console.info('app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [disableDeprecatedForms(), provideForms()]);
