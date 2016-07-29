import { Component }                from '@angular/core';
import { DBSPHighlightDirective }   from "./attribute-directives/dbsp-highlight.directive";
import { DBSPNoteComponent }        from "./jquery-components/dbsp-note.component"
import { DBSPRandomNoteComponent }  from "./jquery-components/dbsp-random-note.component" 

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  directives: [DBSPHighlightDirective, DBSPNoteComponent, DBSPRandomNoteComponent],
  styles: [require('./app.component.css')]
})
export class AppComponent { }
