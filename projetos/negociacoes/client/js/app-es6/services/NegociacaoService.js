import {HttpService} from './HttpService';
import {ConnectionFactory} from './ConnectionFactory';
import {NegociacaoDAO} from '../DAO/NegociacaoDAO';
import {Negociacao} from '../models/Negociacao';

export class NegociacaoService {

    constructor(){

        this._http = new HttpService();

    }

    obterNegociacoesDaSemana() {
            return this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possível obter as negociações da semana');
                });           
    }

    obterNegociacoesDaSemanaAnterior() {
            return this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possível obter as negociações da semana anterior');
                });         
        
    }

    obterNegociacoesDaSemanaRetrasada() {
            return this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possível obter as negociações da semana retrasada');
                });             
    }

    obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), []);

            return negociacoes;

        }).catch(erro => {
            throw new Error(erro);
        });

    } 

    cadastra(negociacao) {

        return ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDAO(connection))
                .then(dao => dao.adiciona(negociacao))
                .then(() => 'negociacao adicionada com sucesso!')
                .catch(error => {
                    console.log(error);
                    throw new Error('nao foi possivel adicionar negociacao')
                });
    }

    lista() {

        return ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDAO(connection))
                .then(dao => dao.listaTodos())
                .catch(error => {
                    console.log(error);
                    throw new Error('Nao foi possivel obter as negociacoes :(')
                })
    }

    apaga(){
        
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDAO(connection))
            .then(dao => dao.apagaTodos())
            .then(() => 'Negociacoes apagadas com sucesso')
            .catch(error => {
                console.log(error);
                throw new Error('nao foi possivel apagar as negociacoes')
            })
    }

    importa(listaAtual){
        
        return this.obterNegociacoes()
            .then(negociacoes => 
                negociacoes.filter(negociacao => 
                    !listaAtual.some(negociacaoExistente => 
                        negociacao.isEquals(negociacaoExistente)))
            )
            .catch(error => {
                console.log(error);
                throw new Error('Nao foi possivel buscar negociacoes para importar');
            })

    }
}
