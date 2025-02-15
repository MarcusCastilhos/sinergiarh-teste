import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  sections: HTMLElement[] = [];
  navLinks: HTMLAnchorElement[] = [];

  ngOnInit(): void {
    this.sections = Array.from(document.querySelectorAll('section'));
    this.navLinks = Array.from(
      document.querySelectorAll('.nav-list-left a, .nav-list-right a')
    );
    console.log('Seções encontradas:', this.sections); // Verifica se as seções estão sendo selecionadas
    console.log('Links encontrados:', this.navLinks); // Verifica se os links estão sendo selecionados
    this.highlightNav();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.highlightNav();
  }

  highlightNav(): void {
    let currentSection = '';

    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    console.log('Seção Atual:', currentSection); // Verifica qual seção está sendo considerada como ativa

    this.navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
        console.log('Link Ativo:', link); // Verifica qual link está sendo destacado
      }
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
