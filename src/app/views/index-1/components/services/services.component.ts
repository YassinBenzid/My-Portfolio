import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import { services } from '../data';
import { TextDecorationComponent } from "../../../../components/text-decoration/text-decoration.component";

@Component({
    selector: 'app-services',
    imports: [CommonModule, TextDecorationComponent],
    templateUrl: './services.component.html',
    styles: ``
})
export class ServicesComponent {
    services = services
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
}
