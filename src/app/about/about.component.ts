import { Component, Input } from '@angular/core';
import { About } from '../portfolio.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() aboutData!: About;
}
