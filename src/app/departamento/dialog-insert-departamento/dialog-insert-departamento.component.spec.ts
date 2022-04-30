import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInsertDepartamentoComponent } from './dialog-insert-departamento.component';

describe('DialogInsertDepartamentoComponent', () => {
  let component: DialogInsertDepartamentoComponent;
  let fixture: ComponentFixture<DialogInsertDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInsertDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInsertDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
