import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-info-2',
    imports: [CommonModule],
    templateUrl: './blog-info-2.component.html',
    styles: ``
})
export class BlogInfo2Component {
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
