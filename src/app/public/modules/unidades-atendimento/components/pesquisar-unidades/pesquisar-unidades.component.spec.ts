import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarUnidadesComponent } from './pesquisar-unidades.component';

describe('PesquisarUnidadesComponent', () => {
  let component: PesquisarUnidadesComponent;
  let fixture: ComponentFixture<PesquisarUnidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarUnidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
