import { Component, inject, Renderer2, type OnDestroy, type OnInit } from '@angular/core';
import { Sidebar1Component } from "./components/sidebar-1/sidebar1.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from "./components/services/services.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { MobileMenuComponent } from "../../components/mobile-menu/mobile-menu.component";
import { CustomModalComponent } from "../../components/custom-modal/custom-modal.component";

@Component({
  selector: 'app-index-1',
  imports: [Sidebar1Component, HomeComponent, AboutComponent, ServicesComponent, SkillsComponent, PortfolioComponent, TestimonialComponent, BlogComponent, ContactComponent, MobileMenuComponent, CustomModalComponent],
  templateUrl: './index-1.component.html',
  styles: ``
})
export class Index1Component implements OnInit,OnDestroy{
    isMobileMenuActive: boolean = false;
    private renderer = inject(Renderer2)

    toggleMobileMenu() {
      this.isMobileMenuActive = !this.isMobileMenuActive;
    }
  
    closeMobileMenu() {
      this.isMobileMenuActive = false;
    }

    ngOnInit(){
        this.renderer.addClass(document.body, 'homepage1-body');

    }
    ngOnDestroy(){
        this.renderer.removeClass(document.body, 'homepage1-body');
    }
}
