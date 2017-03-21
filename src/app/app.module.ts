import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
/**
 * Directives
 */
import { CentralizeDirective } from './centralize.directive';

/**
 * Services
 */
// import { FormBaseService } from './form/form-base.service';
/**
 * Models
 */
// import { FormField } from './form/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    
    CentralizeDirective,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
