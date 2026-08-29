import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, socialLinks } from '../data/portfolio-data';
import { ICONS } from '../shared/icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = projects;
  social = socialLinks;
  icons = ICONS;
}
