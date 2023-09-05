import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = '';
  password: string = '';
  tipoUsuario: string = 'maestro'; // Valor predeterminado

  constructor(private menuController: MenuController, private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  async registrarUsuario() {
    // Validar campos vacíos
    if (!this.username || !this.password || !this.tipoUsuario) {
      const alert = await this.alertController.create({
        header: 'Error de registro',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    
    const usuario = {
      username: this.username,
      password: this.password,
      tipoUsuario: this.tipoUsuario,
    };

    
    localStorage.setItem('usuario', JSON.stringify(usuario));

    
    this.router.navigate(['/login']);
  }
  ionViewWillEnter() {
    this.username = '';
    this.password = '';
    this.tipoUsuario = 'maestro';
  }
}
