import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {QnaComponent} from "./QnA/qna.component";
import {QnaService} from "./QnA/qna.service";

@NgModule({
    imports: [BrowserModule,FormsModule,HttpModule],
    declarations: [AppComponent, QnaComponent],
    providers: [QnaService],
    bootstrap: [AppComponent]
})
export class AppModule {
}



