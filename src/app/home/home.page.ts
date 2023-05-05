import { Cliente } from './../models/Cliente.model';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage {

  listaClientes: Cliente[] = [];

  constructor(private clientesService: ClientesService, private router: Router) {
    this.buscarClientes()
  }

  buscarClientes(){
    this.clientesService.getAll().subscribe(dados => {
      this.listaClientes = dados;
    });
  }

  alterarCliente(id: number){
    this.router.navigateByUrl(`/alterar-cliente/${id}`);

  }

  excluirCliente(id: number){
    this.router.navigateByUrl(`/excluir-cliente/${id}`);
  }
}
