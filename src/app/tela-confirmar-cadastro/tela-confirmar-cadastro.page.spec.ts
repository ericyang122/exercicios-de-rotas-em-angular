import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaConfirmarCadastroPage } from './tela-confirmar-cadastro.page';


describe('TelaConfirmarCadastroPage', () => {
  let component: TelaConfirmarCadastroPage;
  let fixture: ComponentFixture<TelaConfirmarCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConfirmarCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
