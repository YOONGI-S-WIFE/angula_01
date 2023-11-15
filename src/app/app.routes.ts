import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

    {path: '', component : LoginComponent},
    {path: 'registrar', component : RegistroComponent},
    {path: 'dashboard', component : DashboardComponent}

];
