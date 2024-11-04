import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone : true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const progressBars = this.el.nativeElement.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-progress');
        } else {
          entry.target.classList.remove('show-progress');
        }
      });
    }, {
      threshold: 0.5
    });

    progressBars.forEach((bar: any) => {
      observer.observe(bar);
    });
  }
}
