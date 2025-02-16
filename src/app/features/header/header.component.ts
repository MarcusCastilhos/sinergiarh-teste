import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [BannerComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
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
