# Relogio

```
class Relogio {

    constructor() {
        this._segundos = 0;

        setInterval(function () {
            console.log(++this._segundos);
          }, 1000);
    }
}

var relogio = new Relogio();
```

O problema é que a mensagem exibida no console é NaN (Not a Number) e não os segundos desde que o relógio foi instanciado.

Resposta:

```
class Relogio {

    constructor() {
        this._segundos = 0;

        setInterval(() =>
            console.log(++this._segundos), 1000);
    }
}

let relogio = new Relogio();

```

>Lembre-se que o this de uma arrow function é léxico, isto é, estático e pega emprestado seu valor do ambiente no qual foi declarado.