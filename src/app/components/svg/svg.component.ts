import { Component, Input } from '@angular/core';
import { SvgModel } from 'src/app/models/svg-model';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
})
export class SvgComponent {
  @Input() image: SvgModel = {
    xmlns: '',
    dataName: '',
    width: '',
    height: '',
    viewBox: '',
    xmlnsXlink: '',
    content: '',
  };
}
