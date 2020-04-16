import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip',
  styles: [`
    section {
      text-align: center;
    }

    div {
      display: inline-block;
      padding: .5em;
      margin: 1em auto;
      max-width: 70%;
    }

    .border {
      outline: 1px solid lightblue;
    }
  `],
  template: `
    <label>
      Change the tooltip position:

      <select class="example-select" [(ngModel)]="myPosition">
        <option value="before">Before</option>
        <option value="after">After</option>
        <option value="above">Above</option>
        <option value="below">Below</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
    </label>
    <br>

    <label>
      Dotted Underline?

      <select class="example-select-text" [(ngModel)]="showUnderline">
        <option [ngValue]="true">Yes</option>
        <option [ngValue]="false">No</option>
      </select>
    </label>

    <hr>
    <br>

    <section>
      <div [class.border]="!showUnderline">
        <ts-tooltip
          [tooltipValue]="myTooltip"
          [tooltipPosition]="myPosition"
          [hasUnderline]="showUnderline"
        >Hover me.</ts-tooltip>
      </div>
    </section>
  `,
})
export class TooltipComponent {
  myTooltip = 'Here is my content';
  myPosition = 'below';
  showUnderline = false;
}