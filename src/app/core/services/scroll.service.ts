import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private activeSection = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSection.asObservable();

  setActiveSection(sectionId: string) {
    console.log(`Mudando para a seção: ${sectionId}`); // Verifique a saída aqui
    this.activeSection.next(sectionId);
  }
}
