import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2RtlComponent } from './index-2-rtl.component';

describe('Index2RtlComponent', () => {
  let component: Index2RtlComponent;
  let fixture: ComponentFixture<Index2RtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2RtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2RtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
