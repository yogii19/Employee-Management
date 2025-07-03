import { Routes } from '@angular/router';
import { EmployeelistComponent } from './pages/employeelist/employeelist.component';
import { EmployeeformComponent } from './pages/employeeform/employeeform.component';


export const routes: Routes = [
    {path:'', component:EmployeelistComponent},
    {path:'employeeform', component:EmployeeformComponent},
    {path:'edit/:id', component:EmployeeformComponent}
];
