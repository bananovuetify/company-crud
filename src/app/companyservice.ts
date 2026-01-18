import { Injectable, signal } from '@angular/core';

import { Company } from './model/company.model';
import { COMPANY_DATA } from './model/company.data';

@Injectable({ providedIn: 'root' })
export class CompanyService {

  companies = signal<Company[]>([...COMPANY_DATA]);
  selectedCompany = signal<Company | null>(null);

  add(company: Company) {
    this.companies.update(list => [
      ...list,
      { ...company, companyId: Date.now() }
    ]);
  }

  update(company: Company) {
    this.companies.update(list =>
      list.map(c => c.companyId === company.companyId ? company : c)
    );
  }

  delete(id: number) {
    this.companies.update(list => list.filter(c => c.companyId !== id));
  }

  select(company: Company) {
    this.selectedCompany.set(company);
  }

  clear() {
    this.selectedCompany.set(null);
  }
}
