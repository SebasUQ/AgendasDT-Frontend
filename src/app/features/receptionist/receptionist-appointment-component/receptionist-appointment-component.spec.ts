import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptionistAppointmentComponent } from './receptionist-appointment-component';

describe('ReceptionistAppointmentComponent', () => {
  let component: ReceptionistAppointmentComponent;
  let fixture: ComponentFixture<ReceptionistAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionistAppointmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptionistAppointmentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
