# Alura Avançando em JavaScript

[![js image](https://cdn-images-1.medium.com/max/1600/0*CU8lM9dhv_M_XL4L.gif)](https://alura.com.br)

> Códigos e projetos desenvolvidos durante o curso da [Alura](https://alura.com.br)

## Sumário 

1. [Recursos utilizados](#recursos-utilizados)

1. JavaScript avançado I: ES6, orientação a objetos e padrões de projetos
    * [projeto desenvolvido durante o curso](https://github.com/andermelo/alura-engenheiro-javascript/tree/master/projetos/negociacoes)
    * [Exercícios](https://github.com/andermelo/alura-engenheiro-javascript/tree/master/exercicios)         
1. JavaScript Avançado II: ES6, orientação a objetos e padrões de projetos
    * [projeto desenvolvido durante o curso](https://github.com/andermelo/alura-engenheiro-javascript/tree/master/projetos/negociacoes)
    * [Exercícios](https://github.com/andermelo/alura-engenheiro-javascript/tree/master/exercicios)
    * [O padrão de projeto Observer](#o-padrão-de-projeto-observer)
    * [O Padrão de projeto proxy](#o-padrão-de-projeto-proxy)

1. JavaScript Avançado III: ES6, orientação a objetos e padrões de projetos
    * [projeto desenvolvido durante o curso](https://github.com/andermelo/alura-engenheiro-javascript/tree/master/projetos/negociacoes)
    * [Exercícios](https://github.com/andermelo/alura-engenheiro-javascript/tree/master/exercicios)

1. [Referência bibliográfica](#referência-bibliográfica)


## Recursos utilizados

* Visual Studio Code
* ES6

## O padrão de projeto Observer

> Usamos o padrão de projeto Observer sempre que queremos notificar partes do sistema interessadas quando um evento importante for disparado em nosso sistema.

> No contexto da nossa aplicação, entendemos um evento como o ato de adicionar ou esvaziar nossa lista de negociações. É a view que está interessada em observar esse evento e tomar uma ação, no caso, se atualizar com base no estado mais atual do modelo.

## O Padrão de projeto proxy

> A partir da versão 2015 do ECMAScript, a própria linguagem já possui um recurso de Proxy.

> O padrão de projeto Proxy nada mais é do que um objeto "falso", "mentiroso", que envolve e encapsula o objeto real que queremos interagir. É como se fosse uma interface, entre o objeto real e o resto do código. Conseguimos assim controlar o acesso aos seus atributos e métodos. Nele também podemos pendurar códigos que não cabem de estar alocados nos nossos modelos, mas que necessitam ser executados no caso de uma alteração ou atualização do mesmo.

    - O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.
    - O prop é a propriedade em si, que está sendo lida naquele momento.
    - O receiver é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas.

> A variável *arguments* é uma variável implícita que pode ser acessada em métodos ou funções. Ele se comporta como um array onde cada posição equivale ao parâmetro que foi passado para o método ou função. Existe desde o ES5!

## O Padrão de projeto Factory

> O padrão de projeto Factory é um dos padrões mais utilizados no desenvolvimento. Ele é mais um da categoria dos patterns responsáveis por criar objetos, como o Builder e o Prototype.

> *Serve para você delegar a construção de um objeto sem ter que se preocupar com as particularidades dela. Por exemplo, para construir uma casa: você, cliente quer uma casa com dois quartos, com uma varanda, térrea e com duas vagas. O que você faz? chama a construtora e fala pra eles fabricarem a casa pra você, pois você não quer saber quanto de cimento deve ser comprado, qual a profundidade da fundação, que tipo de telha será usada. Você quer a casa padrão com essas coisas que você pediu. O factory faz isso pra você. Define padrões e aplica as customizações em cima disso.* by Marco Salles - Instrutor 
Alura <3

## O Padrão de projeto Promise

> Um Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

Um Promise está em um destes estados: 

    - pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
    - fulfilled (realizada): sucesso na operação.
    - rejected (rejeitado):  falha na operação.
    - settled (estabelecida): Que foi realizada ou rejeitada.

## O Padrão de projeto DAO



## Referência bibliográfica
 
 1. [Alura](https://www.alura.com.br)
 1. [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
 1. [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

