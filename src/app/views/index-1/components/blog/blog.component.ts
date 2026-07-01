import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogs } from 'assets/data';
import { LanguageService } from '@app/services/language.service';
import { TextDecorationComponent } from "../../../../components/text-decoration/text-decoration.component";

@Component({
    selector: 'app-blog',
    imports: [CommonModule, RouterLink, TextDecorationComponent],
    templateUrl: './blog.component.html',
    styles: ``
})
export class BlogComponent {
    blogs = blogs
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
}
