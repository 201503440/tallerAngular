import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Route} from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeComponent } from './components/employee/employee.component'
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {path: 'employee',component: EmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
