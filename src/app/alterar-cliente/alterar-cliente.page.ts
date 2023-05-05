import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/Cliente.model';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.page.html',
  styleUrls: ['./alterar-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AlterarClientePage implements OnInit {

  id = 0;
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private ClientesService: ClientesService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.ClientesService.getOne(this.id).subscribe(retorno => {
      this.nome = retorno.nome ? retorno.nome : '';
      this.email = retorno.email ? retorno.email : '';
    })
  }
  alterar(){

    if (this.senha === this.confirmarSenha) {
      let cliente: Cliente = {
        id: this.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      };

      this.ClientesService.update(cliente).subscribe((dados) => {
        alert('Cliente Alterado:' + dados.id);
        // Aqui ele espera a resposta do servidor.
        this.router.navigateByUrl('/home');
      });

     } else {
       alert('Senhas não confere');
    }
  }
}
