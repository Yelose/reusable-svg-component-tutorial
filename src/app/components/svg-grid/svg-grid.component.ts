import { Component } from '@angular/core';
import { SvgModel } from 'src/app/models/svg-model';
import { wavingGirl } from './svg-data/waving-girl';
import { lovelySvg } from './svg-data/lovely';

@Component({
  selector: 'app-svg-grid',
  templateUrl: './svg-grid.component.html',
  styleUrls: ['./svg-grid.component.scss'],
})
export class SvgGridComponent {
  images: SvgModel[] = [
    wavingGirl,
    lovelySvg,
    wavingGirl,
    lovelySvg,
    wavingGirl,
    wavingGirl,
    lovelySvg,
  ];
}
