import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../entities/employee';
import { EmployeeDataService } from '../infrastructure/employee.data.service';



@Injectable({ providedIn: 'root' })
export class ManageFacade {

  private employeeListSubject = new BehaviorSubject<Employee[]>([]);
  employeeList$ = this.employeeListSubject.asObservable();

  constructor(private employeeDataService: EmployeeDataService) {
  }

  load(): void {
    this.employeeDataService.load().subscribe(
      employeeList => {
        this.employeeListSubject.next(employeeList)
      },
      err => {
        console.error('err', err);
      }
    );
  }

}
