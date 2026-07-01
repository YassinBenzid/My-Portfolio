import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeader2Component } from './blog-header-2.component';

describe('BlogHeader2Component', () => {
  let component: BlogHeader2Component;
  let fixture: ComponentFixture<BlogHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHeader2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
