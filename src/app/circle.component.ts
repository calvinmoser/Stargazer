import {Component} from '@angular/core';

// Kudos to Tero Parvianinen (https://teropa.info/blog/2016/02/28/metabubbles-generative-art-with-angular-2.html)

@Component({
  selector: '[mb-circle]',
  inputs: ['circle'],
  template: `
    <svg:circle [attr.cx]="circle.x"
                [attr.cy]="circle.y"
                [attr.r]="circle.radius"
                [attr.fill]="circle.color" />
  `
})
export class CircleComponent {
}