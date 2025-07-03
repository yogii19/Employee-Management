import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeserviceService } from '../../service/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employeeform',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css'
})
export class EmployeeformComponent {
public id: number | null = null;
  form!: FormGroup;

  constructor(
    private employeeservice: EmployeeserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      dept: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.employeeservice.getById(this.id).subscribe((data: Employee) => {
          this.form.patchValue(data);
        });
      }
    });
  } 

  onSubmit() {
    if (this.form.invalid) return;

    const employee: Employee = this.form.value;

    if (this.id) {
      this.employeeservice.update(this.id, employee).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.employeeservice.create(employee).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}