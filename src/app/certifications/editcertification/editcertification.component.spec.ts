import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcertificationComponent } from './editcertification.component';

describe('EditcertificationComponent', () => {
  let component: EditcertificationComponent;
  let fixture: ComponentFixture<EditcertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
