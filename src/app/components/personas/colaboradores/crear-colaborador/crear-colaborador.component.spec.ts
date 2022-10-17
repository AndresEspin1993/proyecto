import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearColaboradorComponent } from './crear-colaborador.component';

describe('CrearColaboradorComponent', () => {
  let component: CrearColaboradorComponent;
  let fixture: ComponentFixture<CrearColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearColaboradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
