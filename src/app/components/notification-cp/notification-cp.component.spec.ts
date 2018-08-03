import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCpComponent } from './notification-cp.component';

describe('NotificationCpComponent', () => {
  let component: NotificationCpComponent;
  let fixture: ComponentFixture<NotificationCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
