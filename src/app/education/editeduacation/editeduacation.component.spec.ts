import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeduacationComponent } from './editeduacation.component';

describe('EditeduacationComponent', () => {
  let component: EditeduacationComponent;
  let fixture: ComponentFixture<EditeduacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeduacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeduacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
