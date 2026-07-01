import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills2Component } from './skills-2.component';

describe('Skills2Component', () => {
  let component: Skills2Component;
  let fixture: ComponentFixture<Skills2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skills2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
