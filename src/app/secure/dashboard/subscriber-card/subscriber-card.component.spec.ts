import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberCardComponent } from './subscriber-card.component';

describe('SubscriberCardComponent', () => {
  let component: SubscriberCardComponent;
  let fixture: ComponentFixture<SubscriberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
