import { Component, HostListener } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Ajoute une propriété pour suivre l'état du menu
  isScrolled: boolean = false;

  // Ajoute un listener d'événement pour détecter le scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('nav');
    
    if (window.pageYOffset > 50) { // Si l'utilisateur a défilé de 50px ou plus
      navbar?.classList.add('scrolled');
      navbar?.classList.remove('transparent');
    } else {
      navbar?.classList.add('transparent');
      navbar?.classList.remove('scrolled');
    }
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
