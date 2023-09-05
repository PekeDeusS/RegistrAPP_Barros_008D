import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  tipoUsuario: string = 'maestro';

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
