import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { BodyClassService } from '@app/services/body-class.service';
import { About2Component } from "./components/about-2/about-2.component";
import { Contact2Component } from "../../components/contact-2/contact-2.component";
import { Home2Component } from "./components/home-2/home-2.component";
import { MobileMenu2Component } from "../../components/mobile-menu2/mobile-menu2.component";
import { Portfolio2Component } from "./components/portfolio-2/portfolio-2.component";
import { Services2Component } from "./components/services-2/services-2.component";
import { Sidebar2Component } from './components/sidebar-2/sidebar2.component';
import { Skills2Component } from "./components/skills-2/skills-2.component";
import { CustomModalComponent } from "../../components/custom-modal/custom-modal.component";

@Component({
  selector: 'app-index-2',
  imports: [MobileMenu2Component, Sidebar2Component, Home2Component, About2Component, Services2Component, Skills2Component, Portfolio2Component, Contact2Component, CustomModalComponent],
  templateUrl: './index-2.component.html',
  styles: ``
})
export class Index2Component implements OnInit,OnDestroy{
    private bodyClassService= inject(BodyClassService)

    ngOnInit(){
        this.bodyClassService.add('homepage2-body');

    }
    ngOnDestroy(){
        this.bodyClassService.remove('homepage2-body');
    }
}
