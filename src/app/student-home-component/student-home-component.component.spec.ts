import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeComponentComponent } from './student-home-component.component';

describe('StudentHomeComponentComponent', () => {
  let component: StudentHomeComponentComponent;
  let fixture: ComponentFixture<StudentHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHomeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
