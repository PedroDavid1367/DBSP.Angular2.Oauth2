import {RouterConfig, provideRouter } from '@angular/router';
import { OAuthTestComponent }         from "./app/oauth2-components/oauth-test.component";
import { CallbackComponent }          from "./app/oauth2-components/callback.component";

const APP_ROUTES: RouterConfig = [
  {
    path: '',
    redirectTo: "/home",
    terminal: true
  },
  {
    path: 'home',
    component: OAuthTestComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
  //--> provide(FlightBookingGuard, {useClass: FlightBookingGuard})
];