import { Component, Input } from '@angular/core';
import { Services } from '../portfolio.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  @Input() serviceData!: Services;
}
