
function calc(){
    var n = document.getElementById('numero')
    var tab = document.getElementById('seltab')
    var numero = Number(n.value)

    if(numero == 0){
       alert('ERROR')
    }else{  
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c} `
            tab.appendChild(item)
            c++
        }

    }
}