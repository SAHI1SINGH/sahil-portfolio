import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({ providedIn: 'root' })
export class AosService {
  private initialized = false;

  init(): void {
    if (this.initialized) return;
    this.initialized = true;
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }

  refresh(): void {
    AOS.refreshHard();
  }
}
