import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../data/portfolio-data';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss',
})
export class PreloaderComponent implements OnInit {
  isLoading = true;
  isExiting = false;
  brandName = personalInfo.brandName;

  ngOnInit(): void {
    setTimeout(() => {
      this.isExiting = true;
      setTimeout(() => (this.isLoading = false), 1200);
    }, 2200);
  }
}
