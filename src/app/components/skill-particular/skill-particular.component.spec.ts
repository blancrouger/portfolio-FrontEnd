import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillParticularComponent } from './skill-particular.component';

describe('SkillParticularComponent', () => {
  let component: SkillParticularComponent;
  let fixture: ComponentFixture<SkillParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillParticularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
