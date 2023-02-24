
fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(resposta =>{
    return resposta.json()
}).then(corpo =>{
    dolar = document.getElementById("moeda-dolar").innerHTML = corpo.USDBRL.code
    dolar = document.getElementById("moeda-dolar-comparada").innerHTML = corpo.USDBRL.name
    dolar = document.getElementById("valor-moeda-dolar").innerHTML = 'Valor:' + corpo.USDBRL.high
    dolar = document.getElementById("ultima-atualizacao-dolar").innerHTML =  'Ultima atualização: ' + corpo.USDBRL.create_date

    euro = document.getElementById("moeda-euro").innerHTML = corpo.EURBRL.code
    euro = document.getElementById("moeda-euro-comparada").innerHTML = corpo.EURBRL.name
    euro = document.getElementById("valor-moeda-euro").innerHTML = corpo.EURBRL.high
    euro = document.getElementById("ultima-atualizacao-euro").innerHTML =  'Ultima atualização: ' + corpo.USDBRL.create_date

    bitcoin = document.getElementById("moeda-btc").innerHTML = corpo.BTCBRL.code
    bitcoin = document.getElementById("moeda-btc-comparada").innerHTML = corpo.BTCBRL.name
    bitcoin = document.getElementById("valor-moeda-BTC").innerHTML = corpo.BTCBRL.high
    bitcoin = document.getElementById("ultima-atualizacao-btc").innerHTML =  'Ultima atualização: ' + corpo.USDBRL.create_date
})