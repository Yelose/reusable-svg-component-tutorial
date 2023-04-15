import { Component } from '@angular/core';
import { SvgModel } from './models/svg-model';
import { wavingGirl } from './components/svg-grid/svg-data/waving-girl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reusable-svg-component';

  image: SvgModel = wavingGirl;
}
