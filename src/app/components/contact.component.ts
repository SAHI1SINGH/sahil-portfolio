import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { personalInfo, socialLinks } from '../data/portfolio-data';
import { ICONS } from '../shared/icons';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionRef') sectionRef!: ElementRef<HTMLElement>;

  personalInfo = personalInfo;
  social = socialLinks;
  icons = ICONS;
  status: Status = 'idle';
  parallaxY = -20;

  firstName = '';
  lastName = '';
  email = '';
  message = '';
  permission = false;

  ngAfterViewInit(): void {
    this.updateParallax();
  }

  ngOnDestroy(): void {}

  @HostListener('window:scroll')
  onScroll() {
    this.updateParallax();
  }

  private updateParallax() {
    if (!this.sectionRef) return;
    const rect = this.sectionRef.nativeElement.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
    this.parallaxY = -20 + progress * 50; // -20% -> 30%
  }

  onSubmit(form: NgForm) {
    if (this.status === 'sending') return;

    if (!this.firstName.trim() || !this.email.trim() || !this.message.trim()) {
      this.status = 'error';
      setTimeout(() => (this.status = 'idle'), 3000);
      return;
    }

    this.status = 'sending';

    const subject = `Portfolio Contact from ${this.firstName} ${this.lastName}`;
    const body = `From: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\n\n${this.message}`;
    const mailto = `mailto:${this.personalInfo.emails.primary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailto, '_blank');
    this.status = 'success';
    form.resetForm();
    setTimeout(() => (this.status = 'idle'), 3000);
  }
}
