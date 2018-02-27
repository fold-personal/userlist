import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { UserPage } from '../pages/user/user';
import { UsersPage } from '../pages/users/users';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    UserPage,
    UsersPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      locationStrategy: 'path',
    }, {
      links: [
        { component: UserPage, name: 'UserPage', segment: 'user/:id' },
        { component: UsersPage, name: 'UsersPage', segment: 'users' },
      ],
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    UsersPage,
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
