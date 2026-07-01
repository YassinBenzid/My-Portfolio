import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDecoration2Component } from './text-decoration-2.component';

describe('TextDecoration2Component', () => {
  let component: TextDecoration2Component;
  let fixture: ComponentFixture<TextDecoration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextDecoration2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDecoration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
