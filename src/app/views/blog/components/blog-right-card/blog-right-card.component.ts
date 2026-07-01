import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { BlogType } from 'types';

@Component({
    selector: 'app-blog-right-card',
    imports: [RouterLink],
    templateUrl: './blog-right-card.component.html',
    styles: ``
})
export class BlogRightCardComponent {
    @Input() blog!: BlogType
}
