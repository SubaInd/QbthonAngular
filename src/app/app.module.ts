import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { EventsComponent } from './events/events.component';
import { EventdayadminComponent } from './eventdayadmin/eventdayadmin.component';
import { TriggermailsComponent } from './triggermails/triggermails.component';
import { ReportsComponent } from './reports/reports.component';
import { UserComponent } from './user/user.component';
import { SmeComponent } from './sme/sme.component';
import { EventsdayuserComponent } from './eventsdayuser/eventsdayuser.component';
import { UsernpminationComponent } from './usernpmination/usernpmination.component';
import { EventsdaysmeComponent } from './eventsdaysme/eventsdaysme.component';
import { FilterOptionsComponent } from './shared/filter-options/filter-options.component';
import { EventsInfoComponent } from './user/events-info/events-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectCheckAllComponent } from './shared/select-check-all/select-check-all.component';
import {MatTableModule} from '@angular/material/table';
import { EventDateDialogComponent } from './user/events-info/event-date-dialog/event-date-dialog.component';
import {MatDatepickerModule, MatDatepickerContent, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';
import { UniqueFilterPipe } from './shared/unique-filter.pipe';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpageComponent,
    EventsComponent,
    EventdayadminComponent,
    TriggermailsComponent,
    ReportsComponent,
    UserComponent,
    SmeComponent,
    EventsdayuserComponent,
    UsernpminationComponent,
    EventsdaysmeComponent,
    FilterOptionsComponent,
    EventsInfoComponent,
    SelectCheckAllComponent,
    EventDateDialogComponent,
    UniqueFilterPipe,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
    ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent],
  entryComponents: [EventDateDialogComponent]
})
export class AppModule { }
