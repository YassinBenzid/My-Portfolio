import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInfo2Component } from './blog-info-2.component';

describe('BlogInfo2Component', () => {
  let component: BlogInfo2Component;
  let fixture: ComponentFixture<BlogInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogInfo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
