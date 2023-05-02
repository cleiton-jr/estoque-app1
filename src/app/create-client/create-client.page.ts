import { routes } from './../app.routes';
import { Cliente } from './../models/Cliente.model';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.page.html',
  styleUrls: ['./create-client.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateClientPage implements OnInit {
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';


constructor(private clientesService: ClientesService, private route:Router) {}

  ngOnInit() {}

  Criar(){

    if (this.senha === this.confirmarSenha) {
      let cliente: Cliente = {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      };

      this.clientesService.create(cliente).subscribe((dados) => {
        alert('Cliente inserido:' + dados.id);
        // Aqui ele espera a resposta do servidor.
        this.route.navigateByUrl('/home');
      });

     } else {
       alert('Senhas não confere');
    }
  }
}
