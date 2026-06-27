import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCadastrar } from './relatorio-cadastrar';

describe('RelatorioCadastrar', () => {
  let component: RelatorioCadastrar;
  let fixture: ComponentFixture<RelatorioCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
