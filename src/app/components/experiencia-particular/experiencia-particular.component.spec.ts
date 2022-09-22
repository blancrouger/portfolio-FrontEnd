import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaParticularComponent } from './experiencia-particular.component';

describe('ExperienciaParticularComponent', () => {
  let component: ExperienciaParticularComponent;
  let fixture: ComponentFixture<ExperienciaParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaParticularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
