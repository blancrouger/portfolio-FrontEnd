import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoggingComponent } from './btn-logging.component';

describe('BtnLoggingComponent', () => {
  let component: BtnLoggingComponent;
  let fixture: ComponentFixture<BtnLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLoggingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
