import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { internshipsList } from '../data/portfolio-data';

@Component({
  selector: 'app-internships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './internships.component.html',
})
export class InternshipsComponent {
  internships = internshipsList;
}
