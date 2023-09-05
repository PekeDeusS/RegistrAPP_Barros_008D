import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  tipoUsuario: string = 'maestro';
  constructor(private menuController: MenuController,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  async iniciarSesion() {
    // Validar campos vacíos
    if (!this.username || !this.password || !this.tipoUsuario) {
      const alert = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    const usuarioGuardado = localStorage.getItem('usuario');
  
    if (!usuarioGuardado) {
      const alert = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message: 'No se encontró un usuario registrado. Regístrate primero.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
  
    const usuario = JSON.parse(usuarioGuardado);
    
    if (
      (this.tipoUsuario === 'alumno' || this.tipoUsuario === 'maestro') &&
      this.username === usuario.username &&
      this.password === usuario.password
    ) {
      if (this.tipoUsuario === 'alumno') {
        this.router.navigate(['/inicio']);
      } else if (this.tipoUsuario === 'maestro') {
        this.router.navigate(['/qrcode']);
      }
  
      // Limpia los campos del formulario
      this.username = '';
      this.password = '';
      this.tipoUsuario = 'maestro'; // Opcional: Puedes restablecer el tipo de usuario si es necesario
    } else {
      const alert = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message:
          'Las credenciales ingresadas son inválidas. Por favor, inténtalo nuevamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
  

}
