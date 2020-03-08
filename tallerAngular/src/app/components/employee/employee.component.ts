import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Emplo } from '../../models/emplo';
import { EmployeeService } from '../../services/employee.service';


declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Emplo[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }


  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Emplo();
    }
  }

  addEmployee(form: NgForm) {
    if (form.value.cod_empleado) {

      const updateEmployee = {
        cod_empleado: form.value.cod_empleado,
        nombre: form.value.nombre,
        apellido: form.value.apellido,
        telefono: form.value.telefono,
        correo: form.value.correo
      }
      //quiero editar
      this.employeeService.updateEmployee(form.value.cod_empleado, updateEmployee).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Updated succesfuly' });
        this.getEmployees();  //para volver a actualizar llos datos 
      });
    } else {
      this.employeeService.setEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'save succesfuly' });
        this.getEmployees();  //para volver a actualizar llos datos 
      });
    }
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe(res => {
      this.employees = res as Emplo[];
      console.log(this.employees);
    });
  }

  editEmployee(employee: Emplo) {
    this.employeeService.selectedEmployee = employee; //selecciohno el empleado primero
  }

  deleteEmployee(cod_empleado: string) {
    if (confirm('Are you sure want delete it?')) {
      this.employeeService.deleteEmployee(cod_empleado).subscribe(res => {
        console.log(res);
        M.toast({ html: 'deleted succesfuly' });
        this.getEmployees();
      });
    } else {

    }
  }
}
