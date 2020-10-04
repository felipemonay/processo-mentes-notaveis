import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericasComponent } from './numericas.component';

describe('NumericasComponent', () => {
  let component: NumericasComponent;
  let fixture: ComponentFixture<NumericasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
