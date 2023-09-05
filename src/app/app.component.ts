import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[
    {
      name:'Inicio',
      redirecTo: '/inicio',
      icon:'home-outline'
    },
    {
      name:'Loguearse',
      redirecTo: '/login',
      icon:'person-outline'
    },
    {
      name:'Registrarse',
      redirecTo: '/register',
      icon:'person-add-outline'
    },
    {
      name:'Info',
      redirecTo: '/info',
      icon:'information-circle-outline'
    },
  ]
  constructor() {}
}
