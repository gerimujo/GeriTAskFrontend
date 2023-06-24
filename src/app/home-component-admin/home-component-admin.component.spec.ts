import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentAdminComponent } from './home-component-admin.component';

describe('HomeComponentAdminComponent', () => {
  let component: HomeComponentAdminComponent;
  let fixture: ComponentFixture<HomeComponentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
