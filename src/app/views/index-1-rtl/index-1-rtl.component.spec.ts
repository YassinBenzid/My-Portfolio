import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index1RtlComponent } from './index-1-rtl.component';

describe('Index1RtlComponent', () => {
  let component: Index1RtlComponent;
  let fixture: ComponentFixture<Index1RtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index1RtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index1RtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
