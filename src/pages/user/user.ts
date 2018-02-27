import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user'
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public users: UserProvider,
  ) {
  }

  ionViewDidLoad() {
    let userId = this.navParams.data.id;
    if (!userId) {
      this.navCtrl.setRoot('UsersPage')
    } else {
      this.users.getUsers().subscribe((data) => {
        this.user = data.filter(usr => {
          return usr.id.toString() === userId.toString();
        })[0] || {};
        if (!this.user.id) {
          console.log('Can find user');
          this.navCtrl.setRoot('UsersPage');
        }
      });
    }
  }

  onBackClick() {
    this.navCtrl.setRoot('UsersPage')
  }
}
