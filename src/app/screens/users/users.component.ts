import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: any[] = [];
  usuarioActivoId: string = '';
  usuarioSeleccionado: boolean = false;

  constructor(private userService: UsersService) { } // se ejecuta de primero

  ngOnInit(): void { // se ejecuta cuando ya cargo el componente

    this.obtenerUsuario();


  }

  obtenerUsuario() {
    this.userService.obtenerTodos().subscribe((response: any) => {
      console.log(response);
      this.usuarios = response.users;
    });
  }

  onSeleccionarUsuario(usuario: string){
    console.log("El usuario seleccionado es : " + usuario);
    this.usuarioSeleccionado = true;
    this.usuarioActivoId = usuario;
  }

}
