import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { certificates } from '../data/portfolio-data';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
})
export class CertificatesComponent {
  certificates = certificates;
}
