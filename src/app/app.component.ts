import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from './components/preloader.component';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { TechnicalSkillsComponent } from './components/technical-skills.component';
import { ServicesComponent } from './components/services.component';
import { ProjectsComponent } from './components/projects.component';
import { ContentCreatorComponent } from './components/content-creator.component';
import { InternshipsComponent } from './components/internships.component';
import { LeadershipComponent } from './components/leadership.component';
import { CertificatesComponent } from './components/certificates.component';
import { SoftSkillsComponent } from './components/soft-skills.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { AosService } from './core/aos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PreloaderComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    TechnicalSkillsComponent,
    ServicesComponent,
    ProjectsComponent,
    ContentCreatorComponent,
    InternshipsComponent,
    LeadershipComponent,
    CertificatesComponent,
    SoftSkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private aos: AosService) {}

  ngOnInit(): void {
    this.aos.init();
  }
}
