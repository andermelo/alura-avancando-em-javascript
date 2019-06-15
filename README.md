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

> A vantagem está ligada com a capacidade de isolar todo o código que acessa seu repositório de dados em um único lugar. Assim, toda vez que o desenvolvedor precisar realizar operações de persistência ele verá que existe um único local para isso, seus DAO's.

> Falando um pouco mais técnico e nem por isso menos bonito, o DAO faz parte da camada de persistência, funciona como uma fachada para a API do IndexedDB. Repare que para usar o DAO não é preciso saber os detalhes do store ou cursor.

## Comparação entre objetos

Temos a seguinte classe que define o retângulo:

```javascript
class Retangulo {

    constructor(base, altura) {

        this.base = base;
        this.altura = altura;
    }

    areaCalculada() {
        return this.base * this.altura;
    }
}
```

Em seguida, temos duas instâncias com valores iguais de base e altura:

```javascript
let r1 = new Retangulo(10,5);
let r2 = new Retangulo(10,5);
```

> Existem tipos primitivos em JavaScript chamado de literais que podem ser acessados como objetos quanto invocamos algum método. O encapsulamento de um primitivo por um objeto automaticamente pelo interpretador é chamado de autoboxing. Por mais que tenhamos um objeto representando um número, a comparação será pelo valor literal (primitivo) e não pela referência. Números são encapsulados pela função construtora Number.

```javascript
console.log(r1.base == r2.base && r1.altura == r2.altura);
```

> Uma maneira de comparamos um objeto com outro é converter ambos os objetos envolvidos na comparação para String, com o auxílio de JSON.stringify, que está preparado para converter um objeto JavaScript para uma string. Essa solução é interessante quando o objeto possui muitas propriedades.

```javascript
console.log(JSON.stringify(r1) == JSON.stringify(r2));
```

## "Some"body help me!

Gisele está desenvolvendo um sistema de controle de passageiros. Ela criou a simples classe que representa um passageiro, que pode ser de avião, ônibus, não importa:

```javascript
class Passageiro {

    constructor(nome, profissao) {

        this.nome = nome;
        this.profissao = profissao;
    }
}
```

Em seguida, ela criou uma lista de passageiros:

```javascript
let passageiros = []

passageiros.push(new Passageiro('Orlando', 'Dentista'));
passageiros.push(new Passageiro('Suzada', 'Advogada'));
passageiros.push(new Passageiro('Hélio', 'Médico'));
passageiros.push(new Passageiro('Salen', 'Programador'));
passageiros.push(new Passageiro('Francisca', 'Médica'));
```
A ideia de Gisele é poder acelerar a busca por médicos ou profissionais que sejam necessários em casos de emergência.

```javascript
let achou = passageiros.some(passageiro => /médic/i.test(passageiro.profissao));

alert(achou);
```

> A função some itera sobre o array, assim como forEach, filter e map. No entanto, seu retorno é true ou false. Ela retorna true logo assim que encontrar o primeiro elemento que for condizente com o critério de comparação utilizado. Quando dizemos, "logo assim", significa que a função parará de iterar nos elementos da lista, porque já encontrou pelo menos algum (some) que atenda ao critério.

Veja que o critério de comparação usa a expressão regular criada literalmente com //. Nela, procuramos pela parte médic, sem levar em consideração se o caractere é maiúsculo ou minúsculo, com o modificador i.


## Referência bibliográfica
 
 1. [Alura](https://www.alura.com.br)
 1. [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
 1. [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

