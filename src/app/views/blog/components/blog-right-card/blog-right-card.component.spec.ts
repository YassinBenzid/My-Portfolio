import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRightCardComponent } from './blog-right-card.component';

describe('BlogRightCardComponent', () => {
  let component: BlogRightCardComponent;
  let fixture: ComponentFixture<BlogRightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRightCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
