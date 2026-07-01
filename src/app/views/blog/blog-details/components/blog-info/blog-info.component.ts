import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-info',
  imports: [CommonModule],
  templateUrl: './blog-info.component.html',
  styles: ``
})
export class BlogInfoComponent {
    featuresData = [
        {
          items: ['visual design', 'branding design']
        },
        {
          items: ['problem solving', 'user testing']
        },
        {
          items: ['php development', 'wp development']
        }
      ];
}
