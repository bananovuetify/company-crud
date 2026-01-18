import { Routes } from '@angular/router';
import { Companycomponent } from './github/companycomponent/companycomponent';

export const routes: Routes = [
        {
        path:'',
        redirectTo:'company',
        pathMatch:'full'
    },    
    {
        path:'company',component:Companycomponent
    },

];
