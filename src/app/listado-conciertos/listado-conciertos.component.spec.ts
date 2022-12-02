import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoConciertosComponent } from './listado-conciertos.component';

describe('ListadoConciertosComponent', () => {
  let component: ListadoConciertosComponent;
  let fixture: ComponentFixture<ListadoConciertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoConciertosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoConciertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
