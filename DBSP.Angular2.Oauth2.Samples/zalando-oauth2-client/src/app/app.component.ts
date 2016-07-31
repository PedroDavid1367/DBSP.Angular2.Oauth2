import { Component }                 from '@angular/core';
//import { DBSPHighlightDirective }  from "./attribute-directives/dbsp-highlight.directive";
//import { DBSPNoteAComponent }      from "./styled-components/dbsp-note-a.component";
//import { DBSPNoteBComponent }      from "./styled-components/dbsp-note-b.component"; 
import { OAuthTestComponent }        from "./oauth2-components/oauth-test.component"
import { Router, ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  directives: [OAuthTestComponent, ROUTER_DIRECTIVES],
  styles: [require('./app.component.css')]
})
export class AppComponent { }
