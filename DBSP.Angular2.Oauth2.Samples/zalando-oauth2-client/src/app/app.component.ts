import { Component }               from '@angular/core';
import { DBSPHighlightDirective }  from "./attribute-directives/dbsp-highlight.directive";
import { DBSPNoteAComponent } from "./styled-components/dbsp-note-a.component";
import { DBSPNoteBComponent } from "./styled-components/dbsp-note-b.component"; 

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  directives: [DBSPHighlightDirective,
               DBSPNoteAComponent,
               DBSPNoteBComponent],
  styles: [require('./app.component.css')]
})
export class AppComponent { }
