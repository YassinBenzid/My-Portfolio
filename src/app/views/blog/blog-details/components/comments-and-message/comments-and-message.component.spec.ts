import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAndMessageComponent } from './comments-and-message.component';

describe('CommentsAndMessageComponent', () => {
  let component: CommentsAndMessageComponent;
  let fixture: ComponentFixture<CommentsAndMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsAndMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsAndMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
