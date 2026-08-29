import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo, socialLinks, footerContent } from '../data/portfolio-data';
import { ICONS } from '../shared/icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  personalInfo = personalInfo;
  social = socialLinks;
  footer = footerContent;
  icons = ICONS;
  year = new Date().getFullYear();
}
