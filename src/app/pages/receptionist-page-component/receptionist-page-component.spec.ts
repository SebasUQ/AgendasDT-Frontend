import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptionistPageComponent } from './receptionist-page-component';

describe('ReceptionistPageComponent', () => {
  let component: ReceptionistPageComponent;
  let fixture: ComponentFixture<ReceptionistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionistPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptionistPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
