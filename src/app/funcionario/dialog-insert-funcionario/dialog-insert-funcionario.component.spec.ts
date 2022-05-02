import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInsertFuncionarioComponent } from './dialog-insert-funcionario.component';

describe('DialogInsertFuncionarioComponent', () => {
  let component: DialogInsertFuncionarioComponent;
  let fixture: ComponentFixture<DialogInsertFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInsertFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInsertFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
