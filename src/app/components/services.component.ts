import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skillsContent } from '../data/portfolio-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  content = skillsContent;
  aosTypes = ['fade-right', 'fade-left', 'fade-right', 'fade-left'];
}
