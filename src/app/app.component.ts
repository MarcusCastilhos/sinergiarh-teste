import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';
import { AboutComponent } from './features/body/about/about.component';
import { ScrollService } from './core/services/scroll.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent],
  providers: [ScrollService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  constructor(private scrollService: ScrollService) {}

  @ViewChild('mainContent', { static: false }) mainContent!: ElementRef;
  ngAfterViewInit() {
    const sections = document.querySelectorAll('.fade-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Seção visível: ${entry.target.id}`);
            entry.target.classList.add('fade-in');
            this.scrollService.setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
