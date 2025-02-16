import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  teamMembers = [
    {
      name: 'Marcus Castilhos',
      role: 'Desenvolvedor Web Full Stack',
      image: './img/marcus-1.jpeg',
    },
    { name: 'Ana Souza', role: 'UX Designer', image: './img/marcus-1.jpeg' },
    {
      name: 'Carlos Oliveira',
      role: 'Gerente de Projetos',
      image: './img/marcus-1.jpeg',
    },
  ];

  currentIndex = 0;

  updateSlide() {
    const translateValue = -this.currentIndex * 100 + '%';
    this.slider.nativeElement.style.transform =
      'translateX(' + translateValue + ')';
  }

  nextSlide() {
    if (this.currentIndex < this.teamMembers.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Volta para o primeiro
    }
    this.updateSlide();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.teamMembers.length - 1; // Volta para o último
    }
    this.updateSlide();
  }
}
