import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProfileComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'SitePortfolio';
  ngAfterViewInit() {
    // Ajoute le comportement de défilement en douceur après l'initialisation de la vue
    const menuLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    menuLinks.forEach((link) => {
      link.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId ?? '');

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector("nav ul");

      // @ts-ignore
      menuToggle.addEventListener("click", function() {
        // @ts-ignore
        nav.classList.toggle("active");
      });
    });
  }
}
