import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.sass']
})
export class PessoasComponent implements OnInit {

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  retornarPessoas(){
    this.pessoaService.retornarPessoas()
  }

  retornarMaisPessoas(){
    this.pessoaService.retornarMaisPessoas()
  }

}
