import { Directive, ElementRef, Input }  from "@angular/core";

@Directive({ selector: "[dbsp-highlight]" })
export class DBSPHighlightDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = "beige";
  }
}