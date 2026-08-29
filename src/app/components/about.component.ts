import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { aboutContent, personalInfo } from '../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  about = aboutContent;
  personalInfo = personalInfo;
}
