//Estudando Funções

//Arrays são declarados com colchetes [], ai deve usar o sinal de atribuição = ao inicializar um array com elementos.


 function calcularCustoViagem(dias, mes) {
    const taxaAlta = [6, 7, 8]; // Junho, Julho, Agosto são meses de alta temporada
    const taxaBaixa = [1,2,11,12]; // Janeiro, Fevereiro, Novembro, Dezembro são meses de baixa temporada
    const custoDiarioAlta = 150; // Custo diário em euros durante a alta temporada
    const custoDiarioBaixa = 100; // Custo diário em euros durante a baixa temporada
    const custoDiarioNormal = 120; // Custo diário em euros durante o resto do ano

    let custoTotal;
    let eBoaEpoca;

    if(taxaAlta.includes(mes)){
        custoTotal = dias * custoDiarioAlta;
        eBoaEpoca = "boa época para visitar, mas irei ficar falida.";
    } else if (taxaBaixa.includes(mes)){
        custoTotal = dias * custoDiarioBaixa;
        eBoaEpoca = "amo o frio, hahah nem todos gostam";
    }else{
        custoTotal = dias * custoDiarioNormal;
        eBoaEpoca = "É uma época Aceitável e Simpática, mas com gastos moderados.";
    }
    return`O custo total da viagem será de € ${custoTotal}. ${eBoaEpoca}`;
}

// Uso da função
console.log(calcularCustoViagem(10, 7)); // Calcula o custo para 10 dias em julho
console.log(calcularCustoViagem(5, 12)); // Calcula o custo para 5 dias em dezembro

