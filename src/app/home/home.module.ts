import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { HomeComponent } from './home.component';

import { SectionsModule } from '../sections/sections.module';

@NgModule({
    imports: [
        AnimateOnScrollModule.forRoot(),
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [ HomeComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
