class NegociacaoService {

    obterNegociacaoDaSemana(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        // Configurações

        xhr.onreadystatechange = () => {
            
            /*
                0: requisição ainda nao iniciada
                1: conexao com o servidor estabelicida
                2: requisicao recebida
                3: processando requisicao
                4: requisicao concluida e a resposta esta pronta
            */

            if(xhr.readyState == 4) {
                
                if(xhr.status == 200){
                    
                    cb(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                }else {
                    console.log(xhr.responseText);
                    cb('Nao foi possível obter as negociações');
                }
            }

        };

        xhr.send();
    }

    obterNegociacaoDaSemanaAnterior(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/anterior');

        // Configurações

        xhr.onreadystatechange = () => {
            
            /*
                0: requisição ainda nao iniciada
                1: conexao com o servidor estabelicida
                2: requisicao recebida
                3: processando requisicao
                4: requisicao concluida e a resposta esta pronta
            */

            if(xhr.readyState == 4) {
                
                if(xhr.status == 200){
                    
                    cb(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                }else {
                    console.log(xhr.responseText);
                    cb('Nao foi possível obter as negociações');
                }
            }

        };

        xhr.send();

        
    }

    obterNegociacaoDaSemanaRetrasada(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/retrasada');

        // Configurações

        xhr.onreadystatechange = () => {
            
            /*
                0: requisição ainda nao iniciada
                1: conexao com o servidor estabelicida
                2: requisicao recebida
                3: processando requisicao
                4: requisicao concluida e a resposta esta pronta
            */

            if(xhr.readyState == 4) {
                
                if(xhr.status == 200){
                    
                    cb(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                }else {
                    console.log(xhr.responseText);
                    cb('Nao foi possível obter as negociações');
                }
            }

        };

        xhr.send();

        
    }

}