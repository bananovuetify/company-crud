import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Companycomponent } from './companycomponent/companycomponent';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo01');
}


// git init
// git add .
// git commit -m "Company CRUD using template-driven form"
// git branch -M main
// git remote add origin https://github.com/bananovuetify/companycrud.git 
// git remote add origin https://github.com/bananovuetify/company-crud.git
// git push -u origin main