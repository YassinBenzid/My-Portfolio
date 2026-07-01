import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog-filter',
    imports: [],
    templateUrl: './blog-filter.component.html',
    styles: ``
})
export class BlogFilterComponent {
    @Input() containerClass?: string;

    portfolioTags=["UI/ux design","front-end development","cms development","Wordpress development","Motion Design"]
}
