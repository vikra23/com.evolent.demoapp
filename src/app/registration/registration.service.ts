import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class registrationService {

    validateInfo(validateForm : NgForm): void {
       console.log('Successfully Submitted');
       console.log(validateForm);
    }
}