import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:5151/getemp');
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:5151/getemp/{id}`);
  }


create(employee: Employee): Observable<string> {
  return this.http.post<string>('http://localhost:5151/addemp', employee, { responseType: 'text' as 'json' });
}

delete(id: number): Observable<void> {
  return this.http.delete<void>(`http://localhost:5151/deleteemp/${id}`);
}

update(id: number, employee: Employee): Observable<void> {
  return this.http.put<void>(`http://localhost:5151/editemp/${id}`, employee);
}

getById(id: number): Observable<Employee> {
  return this.http.get<Employee>(`http://localhost:5151/findemp/${id}`);
}

}