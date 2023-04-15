import { Component, Input } from '@angular/core';
import { SvgModel } from 'src/app/models/svg-model';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
})
export class SvgComponent {
  @Input() primaryColor: string = '';
  @Input() hairColor: string = '';
  @Input() furnitureColor: string = '';
  @Input() shirtColor: string = '';
  @Input() throusersColor: string = '';
  @Input() shoesColor: string = '';
  @Input() plantsColor: string = '';
  @Input() skinColor: string = '';

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
