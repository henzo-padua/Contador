function contar(){
    let ini = document.querySelector('#ini')
    let fim = document.querySelector('#fim')
    let pula = document.querySelector('#passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pula.value.length == 0 || pula.value == 0){
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // CONTAGEM CRESCENTE
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c}, `
            }
        // CONTAGEM REGRESIVA
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c}, `
            }
        }  
        
    }
}