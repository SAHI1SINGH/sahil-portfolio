import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { technicalSkills } from '../data/portfolio-data';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-skills.component.html',
})
export class TechnicalSkillsComponent {
  categories = technicalSkills.categories;
}
