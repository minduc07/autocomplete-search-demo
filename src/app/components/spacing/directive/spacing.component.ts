import { Component } from '@angular/core';


@Component({
  selector: 'demo-spacing',
  styles: [`
    div {
      outline: 1px solid lightblue;
      padding: 8px;
    }
  `],
  template: `
    <p>
      Spacing added as 'margin-bottom' to each outlined div.
    </p>


    <div tsVerticalSpacing="small--2">
      tsVerticalSpacing="small--2"
    </div>

    <div tsVerticalSpacing="small--1">
      tsVerticalSpacing="small--1"
    </div>

    <div tsVerticalSpacing="small--0">
      tsVerticalSpacing="small--0"
    </div>

    <div tsVerticalSpacing>
      tsVerticalSpacing
    </div>

    <div tsVerticalSpacing="large--0">
      tsVerticalSpacing="large--0"
    </div>

    <div tsVerticalSpacing="large--1">
      tsVerticalSpacing="large--1"
    </div>

    <div tsVerticalSpacing="large--2">
      tsVerticalSpacing="large--2"
    </div>

    <div tsVerticalSpacing="large--3">
      tsVerticalSpacing="large--3"
    </div>

    <div tsVerticalSpacing="large--4">
      tsVerticalSpacing="large--4"
    </div>

    <div tsVerticalSpacing="large--5">
      tsVerticalSpacing="large--5"
    </div>

    <div tsVerticalSpacing="large--6">
      tsVerticalSpacing="large--6"
    </div>

    <div tsVerticalSpacing="none">
      tsVerticalSpacing="none"
    </div>

    <div>
      Standard content...
    </div>
  `,
})
export class SpacingComponent {
}
