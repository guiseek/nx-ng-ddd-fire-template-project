import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../entities/customer';
import { CustomerDataService } from '../infrastructure/customer.data.service';



@Injectable({ providedIn: 'root' })
export class MainFacade {

  private customerListSubject = new BehaviorSubject<Customer[]>([]);
  customerList$ = this.customerListSubject.asObservable();

  constructor(private customerDataService: CustomerDataService) {
  }
  create(value: Customer) {
    return this.customerDataService.add(value);
  }
  load(): void {
    this.customerDataService.load().subscribe(
      customerList => {
        this.customerListSubject.next(customerList)
      },
      err => {
        console.error('err', err);
      }
    );
  }

}
