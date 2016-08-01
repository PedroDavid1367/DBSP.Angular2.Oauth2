import { Component }  from "@angular/core";

@Component({
  selector: "dbsp-styling-parent",
  styleUrls: ["./src/app/component-styles/style-a.css"],
  template: `
  <div>
    Some text
    <div>
      More text
      <div>
        Even more text
      </div>
    </div>
  </div>
  <span>I'm a span</span>
  <br />
  <p>I'm a paragraph</p>
  <span class="active">Another span</span>
  <label>I'm a label</label>
  `
})
export class DBSPStylingParentComponent {
}