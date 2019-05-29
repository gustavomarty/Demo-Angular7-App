import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pessoa } from 'src/model/pessoa.model';

@Injectable()
export class PessoaService {

    public arrPessoas: Pessoa[];
    public pessoas: Observable<Pessoa[]> = new Observable<Pessoa[]>(); // Lista de usuários

    constructor(private http: HttpClient) { }

    retornarPessoas(){
        this.getPessoas().subscribe(pessoas =>{
            this.arrPessoas = pessoas;
        });
    }

    retornarMaisPessoas(){
        this.getMorePessoas().subscribe(pessoas =>{
            this.arrPessoas.push.apply(this.arrPessoas, pessoas);
        });
    }

    getPessoas(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>("http://localhost:58798/api/pessoa").pipe(
            map(
                res => {
                    return res;
                }
            )
        );
    }

    getMorePessoas(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>("http://localhost:58798/api/pessoa/more").pipe(
            map(
                res => {
                    return res;
                }
            )
        );
    }
}