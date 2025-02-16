import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  navbarClass: string = 'navbar-container navbar-first'; // Classe inicial

  constructor(
    private scrollService: ScrollService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('Navbar Component Inicializado');
    this.scrollService.activeSection$.subscribe((section) => {
      console.log(`Seção ativa: ${section}`); // Verifique se está capturando corretamente
      if (section === 'about') {
        this.navbarClass = 'navbar-container navbar-second';
      }
      this.cdr.detectChanges();
    });
  }
  toggleMenu(): void {
    const navLinksMobile = document.querySelectorAll(
      '.nav-list-left-mobile a, .nav-list-right-mobile a'
    );

    navLinksMobile.forEach((link) => {
      link.addEventListener('click', () => {
        menuContainer?.classList.remove('active');
        console.log(
          'Menu Fechado:',
          !menuContainer?.classList.contains('active')
        );
      });
    });

    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
      menuContainer.classList.toggle('active');
      console.log('Menu Ativo:', menuContainer.classList.contains('active'));
    }
  }
}
