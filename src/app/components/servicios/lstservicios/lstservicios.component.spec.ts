import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstserviciosComponent } from './lstservicios.component';

describe('LstserviciosComponent', () => {
  let component: LstserviciosComponent;
  let fixture: ComponentFixture<LstserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstserviciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LstserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
