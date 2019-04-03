import { Injectable } from '@angular/core';

export interface IContact {
  name: string;
  number: string;
}

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class ContactsService {

  private readonly contacts: IContact[] = [
    { name: 'Dummy', number: '9801338458'},
  ];

  getContacts(): IContact[] {
    return this.contacts;
  }


}
