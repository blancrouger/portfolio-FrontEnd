import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoParticularComponent } from './proyecto-particular.component';

describe('ProyectoParticularComponent', () => {
  let component: ProyectoParticularComponent;
  let fixture: ComponentFixture<ProyectoParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoParticularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
