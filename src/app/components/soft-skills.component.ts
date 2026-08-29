import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { softSkillsList } from '../data/portfolio-data';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soft-skills.component.html',
})
export class SoftSkillsComponent {
  skills = softSkillsList;
}
