import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  urlBackend: string = 'http://localhost:3000/api/users';

  guardar(usuario: any){

  }

  obtenerTodos(){
    return this.http.get(this.urlBackend);
  }

  obtenerPorId(id:string){
    
  }

  eliminar(id:string){

  }
}
