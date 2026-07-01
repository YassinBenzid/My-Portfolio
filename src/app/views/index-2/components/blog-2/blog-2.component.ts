import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogs } from 'assets/data';
import { TextDecoration2Component } from "../../../../components/text-decoration-2/text-decoration-2.component";

@Component({
    selector: 'app-blog-2',
    imports: [CommonModule, RouterLink, TextDecoration2Component],
    templateUrl: './blog-2.component.html',
    styles: ``
})
export class Blog2Component {
    blogs = blogs
}
