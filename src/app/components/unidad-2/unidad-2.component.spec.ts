import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unidad2Component } from './unidad-2.component';

describe('Unidad2Component', () => {
  let component: Unidad2Component;
  let fixture: ComponentFixture<Unidad2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Unidad2Component]
    });
    fixture = TestBed.createComponent(Unidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
