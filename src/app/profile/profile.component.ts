import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone : true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const banner = this.el.nativeElement.querySelector('.about-me-banner');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          banner.classList.add('zoom-in');
        } else {
          banner.classList.remove('zoom-in');
        }
      });
    });

    observer.observe(banner);
  }
}

