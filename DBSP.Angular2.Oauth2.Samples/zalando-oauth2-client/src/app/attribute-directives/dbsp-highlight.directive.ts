import { Directive, ElementRef, Input, HostListener }  from "@angular/core";

@Directive({ selector: "[dbsp-highlight]" })
export class DBSPHighlightDirective {
  private _el: HTMLElement;
  private _defaultColor: string = "red";

  // highlightColor input has been overriden by the alias dbsp-highlight.
  // If an alias is not used, the template should be written in the next way:
  // <span dbsp-highlight [highlightColor]="'red'"></span>
  // <h1 dbsp-highlight [highlightColor]="'blue'"></h1>
  @Input("dbsp-highlight") highlightColor: string;

  @Input() set defaultColor(color: string) {
    this._defaultColor = color || this._defaultColor; 
  } 

  constructor(private element: ElementRef) {
    this._el = element.nativeElement;
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.highLight(this.highlightColor || this._defaultColor);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highLight(null);
  }

  private highLight(color: string) {
    this._el.style.backgroundColor = color;
  }
}