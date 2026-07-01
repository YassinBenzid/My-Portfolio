import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { skillsData } from '../data';
import { CountUpModule } from 'ngx-countup';
import { TextDecoration2Component } from "../../../../components/text-decoration-2/text-decoration-2.component";

@Component({
  selector: 'app-skills-2',
  imports: [CommonModule, CountUpModule, TextDecoration2Component],
  templateUrl: './skills-2.component.html',
  styles: ``
})
export class Skills2Component {
    skills = skillsData
}
