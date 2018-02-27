import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user'

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  usersData: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public users: UserProvider,
  ) {
  }

  ionViewWillEnter() {
    this.users.getUsers().subscribe((data) => {
      console.log('Got users data: ', data);
      this.usersData = data;
    });
  }

  onUserClicked(user) {
    console.log('Card clicked', user);
    this.navCtrl.setRoot('UserPage', {id: user.id});
  }
}
