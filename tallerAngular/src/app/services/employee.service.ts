import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee'
import { Emplo } from '../models/emplo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URI = 'http://localhost:3000';
  selectedEmployee : Emplo;

  constructor(private http:HttpClient) {
    this.selectedEmployee = new Emplo();
  }

  getEmployee(): Observable<Employee>
  {
    return this.http.get(`${this.API_URI}/employee`);
  }

  setEmployee(employee:Employee): Observable<Employee>
  {
    return this.http.post(`${this.API_URI}/employee`, employee);
  }

  deleteEmployee(id:string): Observable<Employee>
  {
    return this.http.delete(`${this.API_URI}/employee/${id}`);
  }

  updateEmployee(id:string, employee:Emplo): Observable<Employee>
  {
    return this.http.put(`${this.API_URI}/employee/${id}`, employee);
  }
}
