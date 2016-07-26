let $ = require("jquery");

import { Component, OnInit }  from "@angular/core"; 

@Component({
  selector: "dbsp-note",
  template: `
  <span id="greenSpan">I'm a green span<span>
  <br />
  <input id="toggleButton" type="button" value="let's try" />
  `
})
export class DBSPNoteComponent implements OnInit {

  ngOnInit() {
    $("#greenSpan").css("color", "green");

    // This renders an awkward result.
    $("#toggleButton").click(() => $("#greenSpan").toggle("slow"));
  }
}