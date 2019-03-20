import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginResponse } from '../../models/LoginResponse';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  request: LoginRequest;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    private usuarioProvider: UsuarioProvider,
    private toastController: ToastController) {
    this.request = new LoginRequest();
  }

  async onLoggedin() {
    console.log(this.request); //BORRAR
    const response: LoginResponse = await this.usuarioProvider.login(this.request);
    console.log(response); //BORRAR
    if (response.success) {
      this.navCtrl.setRoot(HomePage); 
    } 
    else {
      this.request = new LoginRequest();
      this.toastController.create({
        message: response.message,
        duration: 3000,
        position: 'top'
        }).present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
