import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Companycomponent } from './companycomponent';

describe('Companycomponent', () => {
  let component: Companycomponent;
  let fixture: ComponentFixture<Companycomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Companycomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Companycomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
