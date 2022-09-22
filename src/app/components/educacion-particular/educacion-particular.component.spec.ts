import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionParticularComponent } from './educacion-particular.component';

describe('EducacionParticularComponent', () => {
  let component: EducacionParticularComponent;
  let fixture: ComponentFixture<EducacionParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionParticularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
