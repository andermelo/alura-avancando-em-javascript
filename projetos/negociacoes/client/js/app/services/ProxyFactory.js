class ProxyFactory {

    static create(object, props, acao) {
        return new Proxy(object, {
            
            get(target, prop, receiver) {
                
                if(['adiciona', 'esvazia'].includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    
                    return function() {
                        
                         console.log(`interceptando ${prop}`);
                         Reflect.apply(target[prop], target, arguments);
                         return acao(target);
                    }
                }
                
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    acao(target);
                }

                return Reflect.set(target, prop, value, receiver);
                
            }
            
        });
    }

    static _ehFuncao(func) {

        return typeof(func) == typeof(Function);

    }
}