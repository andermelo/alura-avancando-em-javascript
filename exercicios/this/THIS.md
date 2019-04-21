# This


```
        let exibeConteudo = function() {
            console.log(this);
            alert(this.textContent);
        };
        
        // arrow function agora!
        let exibeConteudo = () =>  {
            console.log(this);
            alert(this.textContent);
        };
```

Um teste demonstra que nosso código deixa de funcionar. Primeiro, independente do elemento que eu clique, o this que é impresso no console é window e não aquele elemento do DOM. Segundo, como this é window e ele não possui a propriedade textContent, é exibido undefined para o usuário. Esse problema serve para demonstrar que uma arrow function vai além de uma sintaxe mais enxuta para declararmos funções.

### Resumo:

* O this de uma função é dinâmico, isto é, seu valor é determinado no momento em que a função é chamada. Como o this é dinâmico, é possível usar artifícios da linguagem, como a API Reflect, para alterá-lo se assim desejarmos.

* O this de uma arrow function é léxico, isto é, seu valor é determinado no local onde a arrow function for definida, ela não cria um novo this. O this de uma arrow function não pode ser alterado, mesmo se usarmos recursos da linguagem, como a API Reflect.

No contexto que vimos acima, a arrow function atrapalhou mais do que ajudou. Mas vejamos um exemplo em que seu escopo léxico torna-se **muito** interessante:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <script>

        class SistemaImpressao {

            constructor() {
                this._codigo = 2;
            }

            imprime(nomes) {

                nomes.forEach(function(nome) {
                    console.log(this);
                    console.log(`${this._codigo}: ${nome}`);
                });
            }
        }

        let nomes = ['Flávio', 'Nico', 'Douglas'];
        let si = new SistemaImpressao();
        si.imprime(nomes);

    </script>
</body>
</html>
```

Temos a seguinte classe SistemaImpressao, que possui o método imprime. O método recebe uma lista e para cada item da lista imprime primeiro a versão do sistema, seguido do item. O problema é que o this._codigo acessado em nosso forEach não é de uma instância da classe SistemaImpressao, aliás, ele é undefined. Contudo, se usarmos arrow function, o this usado no forEach usará o this do contexto no qual foi declarado.

```
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <script>

        class SistemaImpressao {

            constructor() {
                this._codigo = 2;
            }

            imprime(nomes) {
                // usando arrow function.
                nomes.forEach(nome => {
                    console.log(this);
                    console.log(`${this._codigo}: ${nome}`);
                });
            }
        }

        let nomes = ['Flávio', 'Nico', 'Douglas'];
        let si = new SistemaImpressao();
        si.imprime(nomes);

    </script>
</body>
</html>
```

> Arrow functions ajudam bastante quando aplicamos o paradigma orientado a objetos, pois o this passa a se comportar como o espesrado, especialmente em outras linguagens de programação, como Java e C#.