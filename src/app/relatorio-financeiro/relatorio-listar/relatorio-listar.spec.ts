import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioListar } from './relatorio-listar';

describe('RelatorioListar', () => {
  let component: RelatorioListar;
  let fixture: ComponentFixture<RelatorioListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioListar],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
