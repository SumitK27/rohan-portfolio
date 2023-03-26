import { Component, Input } from '@angular/core';
import { Skills } from '../portfolio.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  @Input() skillsData!: Skills;
}
