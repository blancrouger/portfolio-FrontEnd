import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoProgramComponent } from './logo-program.component';

describe('LogoProgramComponent', () => {
  let component: LogoProgramComponent;
  let fixture: ComponentFixture<LogoProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
