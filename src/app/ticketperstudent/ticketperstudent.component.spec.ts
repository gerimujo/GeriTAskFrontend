import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketperstudentComponent } from './ticketperstudent.component';

describe('TicketperstudentComponent', () => {
  let component: TicketperstudentComponent;
  let fixture: ComponentFixture<TicketperstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketperstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketperstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
