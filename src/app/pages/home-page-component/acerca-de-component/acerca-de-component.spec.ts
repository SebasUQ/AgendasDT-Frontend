import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcercaDeComponent } from './acerca-de-component';

describe('AcercaDeComponent', () => {
  let component: AcercaDeComponent;
  let fixture: ComponentFixture<AcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaDeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcercaDeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
