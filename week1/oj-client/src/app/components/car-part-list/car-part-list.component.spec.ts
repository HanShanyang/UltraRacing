import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPartListComponent } from './car-part-list.component';

describe('CarPartListComponent', () => {
  let component: CarPartListComponent;
  let fixture: ComponentFixture<CarPartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
