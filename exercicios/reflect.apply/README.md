### Reflect.apply

Temos dois objetos criados de maneira literal por uma questão de brevidade, mas que poderiam ser instâncias de uma classe:

```
let objeto1 = {

    nome: 'Bob'
};

let objeto2 = {

    nome: 'Leo'
}
```

Temos a seguinte função:

```
function exibeNome() {

    alert(this.nome);
}
```

> O resultado será *undefined*, porque o *this* da função, ou seja, seu contexto não possui a propriedade **nome**.

Agora, que tal chamarmos a função `exibeNome`,mas indicando que seu contexto de execução será `objeto1`? Vejamos:

```
Reflect.apply(exibeNome, objeto1, []); // exibe 'Bob'
```

Como `Reflect.apply` funciona? O primeiro parâmetro é o método ou função que desejamos invocar. O segundo parâmetro é o contexto que o método ou função adotará, ou seja, o valor que será assumido pelo `this`. Por fim, o último parâmetro é um array que contém todos os parâmetros que o método passado como primeiro parâmetro receberá. Como ele não recebe parâmetro nenhum, passamos um array vazio.