import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlog2Component } from './latest-blog-2.component';

describe('LatestBlog2Component', () => {
  let component: LatestBlog2Component;
  let fixture: ComponentFixture<LatestBlog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestBlog2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestBlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
