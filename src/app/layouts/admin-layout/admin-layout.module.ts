import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ApplicationComponent } from '../../application/application.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

// import { LoginComponent } from '../../login/login.component';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    SnotifyModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ApplicationComponent,
    // LoginComponent,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
})

export class AdminLayoutModule {
  // formRegisterGroup: FormGroup = null;
  constructor(){
    // var _builder = new FormBuilder();
    //   this.formRegisterGroup = _builder.group({});

    //   this.formRegisterGroup.addControl("NameControl",new FormControl('',Validators.required));

    //   var validationCollection = [];
    //   validationCollection.push(Validators.required);
    //   validationCollection.push(Validators.pattern("^[0-9]{4,4}$"));

    //   this.formRegisterGroup.addControl("userNameControl",new FormControl('',Validators.compose(validationCollection)));
  }
}


// ,NgForm, FormGroup, FormControl, Validators , FormBuilder