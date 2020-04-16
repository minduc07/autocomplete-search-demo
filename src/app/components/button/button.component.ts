import { Component } from '@angular/core';


@Component({
  selector: 'demo-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  style = 'primary';
  style2 = 'accent';
  disabled = false;
  progress1 = false;
  progress2 = false;
  icon = 'home';
  formatCollapsable = 'collapsable';
  formats = ['filled', 'hollow', 'collapsable'];
  myFormat = 'filled';
  layoutIsRightAligned = false;
  get layout(): string {
    return this.layoutIsRightAligned ? 'right' : 'left';
  }

  run(progress: any) {
    console.log('Demo: In run!');
    this[progress] = true;

    setTimeout(() => {
      this[progress] = false;
    }, 2000);
  }

}