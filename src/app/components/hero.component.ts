import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroContent, socialLinks } from '../data/portfolio-data';
import { ICONS } from '../shared/icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  hero = heroContent;
  social = socialLinks;
  icons = ICONS;
  isPlaying = false;
  hasEnded = false;

  videoSrc = 'videos/hero-video.mp4';

  onVideoEnded(): void {
    this.isPlaying = false;
    this.hasEnded = true;
  }

  toggleVideo(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    if (video.paused) {
      if (this.hasEnded) {
        video.currentTime = 0;
        this.hasEnded = false;
      }
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }
}