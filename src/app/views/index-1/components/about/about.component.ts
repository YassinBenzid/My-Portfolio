import { Component, inject } from '@angular/core'
import { LanguageService } from '@app/services/language.service';
import { TextDecorationComponent } from "../../../../components/text-decoration/text-decoration.component";

@Component({
    selector: 'app-about',
    imports: [TextDecorationComponent],
    templateUrl: './about.component.html',
    styles: ``
})
export class AboutComponent {
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
}
