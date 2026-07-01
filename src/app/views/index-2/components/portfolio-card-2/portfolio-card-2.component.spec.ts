import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCard2Component } from './portfolio-card-2.component';

describe('PortfolioCard2Component', () => {
  let component: PortfolioCard2Component;
  let fixture: ComponentFixture<PortfolioCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
