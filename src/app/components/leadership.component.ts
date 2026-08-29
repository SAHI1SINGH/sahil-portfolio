import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { leadershipList } from '../data/portfolio-data';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership.component.html',
})
export class LeadershipComponent {
  items = leadershipList;
}
