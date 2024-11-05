import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone : true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  isDescriptionVisible = false;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleDescription(event: Event) {
    if (window.innerWidth <= 768) { // Vérifie si on est sur mobile (ex: 768px)
      this.isDescriptionVisible = !this.isDescriptionVisible;
    }
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const items = this.el.nativeElement.querySelectorAll('.portfolio-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      });
    }, {
      threshold: 0.1
    });

    items.forEach((item: any) => {
      observer.observe(item);
    });
  }
}
