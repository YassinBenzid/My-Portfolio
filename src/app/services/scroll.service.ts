import { inject, Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  currentSection = new Subject<string>();

  private viewportScroller= inject(ViewportScroller)

  initScrollDetection(sections: { id: string }[]): void {
    window.addEventListener('scroll', () => this.onScroll(sections));
    this.onScroll(sections); 
  }

  private onScroll(sections: { id: string }[]): void {
    const scrollPosition = window.scrollY + 100; 
    for (let section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.currentSection.next(section.id);
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.onScroll([]));
  }
}
