import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EmployeeserviceService } from '../../service/employee.service';
import { Employee } from '../../models/employee';



@Component({
  selector: 'app-employeelist',
  imports: [RouterModule,CommonModule],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  constructor (private employeeservice: EmployeeserviceService, private router :Router){}
employee : Employee[]=[

]

ngOnInit(): void {
    this.getEmployee();
  }

getEmployee():void{
    this.employeeservice.getEmployee().subscribe(
      data=>{this.employee = data;}
    );
  }

addEmployee(){
   this.router.navigate(["employeeform"]);     

 }
 editEmployee(id: number){
  this.router.navigate(['/edit', id]);
 }
 deleteEmployee(id:number){
this.employeeservice.delete(id).subscribe(
  () =>{this.getEmployee();}
);
}


}