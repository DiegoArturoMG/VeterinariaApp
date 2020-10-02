import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTablaComponent } from './consulta-tabla.component';

describe('ConsultaTablaComponent', () => {
  let component: ConsultaTablaComponent;
  let fixture: ComponentFixture<ConsultaTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
