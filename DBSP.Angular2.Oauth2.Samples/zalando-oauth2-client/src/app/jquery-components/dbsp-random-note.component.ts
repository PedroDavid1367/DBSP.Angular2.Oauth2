let sample = require("./sample.js");

import { Component } from "@angular/core";

@Component({
  selector: "dbsp-random-note",
  template: `
  <hr/>
  Hello
  `
})
export class DBSPRandomNoteComponent {
  constructor() {
    sample();
  }
}