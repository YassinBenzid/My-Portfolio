import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import { TextDecorationComponent } from "../../../../components/text-decoration/text-decoration.component";

@Component({
    selector: 'app-home',
    imports: [CommonModule, TextDecorationComponent],
    templateUrl: './home.component.html',
    styles: ``
})
export class HomeComponent implements OnInit {
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
    readonly lang = this.i18n.lang;

    ngOnInit() {}

}
