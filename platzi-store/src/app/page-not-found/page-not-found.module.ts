import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found.component/page-not-found.component';

import { PageNotFoundComponentRouting } from './page-not-found-routing.module';



@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        PageNotFoundComponentRouting
    ]
})
export class PageNotFoundModule {};