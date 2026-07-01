import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHero2Component } from './blog-hero-2.component';

describe('BlogHero2Component', () => {
  let component: BlogHero2Component;
  let fixture: ComponentFixture<BlogHero2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHero2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
