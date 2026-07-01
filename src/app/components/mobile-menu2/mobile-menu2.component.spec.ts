import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenu2Component } from './mobile-menu2.component';

describe('MobileMenu2Component', () => {
  let component: MobileMenu2Component;
  let fixture: ComponentFixture<MobileMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenu2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
