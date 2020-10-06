import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { AccordianComponent } from './accordian/accordian.component';
import { BannerService } from './shared/banner.service';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    BannerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
