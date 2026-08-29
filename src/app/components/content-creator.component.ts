import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { codingJourney, socialLinks } from '../data/portfolio-data';
import { ICONS } from '../shared/icons';

@Component({
  selector: 'app-content-creator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-creator.component.html',
})
export class ContentCreatorComponent {
  content = codingJourney;
  social = socialLinks;
  icons = ICONS;
}
