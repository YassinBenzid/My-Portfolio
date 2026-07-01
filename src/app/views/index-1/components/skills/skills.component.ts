import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import { skillsData } from '../data';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import { TextDecorationComponent } from "../../../../components/text-decoration/text-decoration.component";

@Component({
  selector: 'app-skills',
  imports: [CommonModule, CountUpModule, TextDecorationComponent],
  templateUrl: './skills.component.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class SkillsComponent {
    skills = skillsData;
    private readonly i18n = inject(LanguageService);
    readonly t = (key: string) => this.i18n.t(key);
}
