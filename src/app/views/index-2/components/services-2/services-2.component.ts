import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { services } from '../data';
import { TextDecoration2Component } from "../../../../components/text-decoration-2/text-decoration-2.component";

@Component({
    selector: 'app-services-2',
    imports: [CommonModule, TextDecoration2Component],
    templateUrl: './services-2.component.html',
    styles: ``
})
export class Services2Component {
    services = services
}
