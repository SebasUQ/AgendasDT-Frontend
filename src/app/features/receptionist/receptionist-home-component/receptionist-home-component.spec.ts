import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptionistHomeComponent } from './receptionist-home-component';

describe('ReceptionistHomeComponent', () => {
  let component: ReceptionistHomeComponent;
  let fixture: ComponentFixture<ReceptionistHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionistHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptionistHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
