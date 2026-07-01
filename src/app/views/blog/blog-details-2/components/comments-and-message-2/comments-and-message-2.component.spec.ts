import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAndMessage2Component } from './comments-and-message-2.component';

describe('CommentsAndMessage2Component', () => {
  let component: CommentsAndMessage2Component;
  let fixture: ComponentFixture<CommentsAndMessage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsAndMessage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsAndMessage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
