import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ContactComponent } from './components/contact/contact.component';

import { ContactRouting } from './contact-routing.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRouting,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class ContactModule {}