import { Component, effect } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { CompanyService } from '../companyservice';
import { COMPANY_DATA } from '../model/company.data';
import { CommonModule } from '@angular/common';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-companycomponent',
  imports: [ FormsModule, FormsModule, CommonModule],
  templateUrl: './companycomponent.html',
  styleUrl: './companycomponent.css',
})
export class Companycomponent {
activeTab = 1;

  companies: Company[] = [...COMPANY_DATA];

  company: Company = this.emptyCompany();

  emptyCompany(): Company {
    return {
      companyId: 0,
      companyName: '',
      pinCode: '',
      address: '',
      phone: ''
    };
  }

  addNew() {
    this.company = this.emptyCompany();
    this.activeTab = 2;
  }

  edit(c: Company) {
    this.company = { ...c };
    this.activeTab = 2;
  }

  save() {
    if (this.company.companyId === 0) {
      this.company.companyId = Date.now();
      this.companies.push({ ...this.company });
    } else {
      const index = this.companies.findIndex(c => c.companyId === this.company.companyId);
      this.companies[index] = { ...this.company };
    }
    this.cancel();
  }

  delete(id: number) {
    this.companies = this.companies.filter(c => c.companyId !== id);
  }

  cancel() {
    this.company = this.emptyCompany();
    this.activeTab = 1;
  }
}