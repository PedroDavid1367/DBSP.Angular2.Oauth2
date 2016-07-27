import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';

import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap';

@Component({
  selector: 'accordion-demo',
  template: `
  <p>
    <button type="button" class="btn btn-primary btn-sm"
            (click)="status.open = !status.open">Toggle last panel
    </button>
    <button type="button" class="btn btn-primary btn-sm"
            (click)="status.isFirstDisabled = ! status.isFirstDisabled">Enable / Disable first panel
    </button>
  </p>
 
  <div class="checkbox">
    <label>
      <input type="checkbox" [(ngModel)]="oneAtATime">
      Open only one at a time
    </label>
  </div>
 
  <accordion [closeOthers]="oneAtATime">
    <accordion-group heading="Static Header, initially expanded"
                     [isOpen]="status.isFirstOpen"
                     [isDisabled]="status.isFirstDisabled">
      This content is straight in the template.
    </accordion-group>
    <accordion-group *ngFor="let group of groups" [heading]="group.title">
       {{ group?.content }}
    </accordion-group>
    <accordion-group heading="Dynamic Body Content">
      <p>The body of the accordion group grows to fit the contents</p>
      <button type="button" class="btn btn-primary btn-sm" (click)="addItem()">Add Item</button>
      <div *ngFor="let item of items">{{item}}</div>
    </accordion-group>
    <accordion-group let group [isOpen]="status.open">
      <div accordion-heading>
        I can have markup, too!
        <i class="pull-right glyphicon"
           [ngClass]="{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}"></i>
      </div>
      This is just some content to illustrate fancy headings.
    </accordion-group>
  </accordion>
  `,
  directives: [ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DBSPNoteAComponent {
  public oneAtATime: boolean = true;
  public items: Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public groups: Array<any> = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }
}