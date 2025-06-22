    
    
    function raioEsfera(raio) {
        let volume = (4 / 3) * Math.PI * raio;
        return volume;
    }
    let numero = prompt("Inserisci un numero:");
    let formula = raioEsfera(numero);
    console.log('O volume da esfera é:'+ raioEsfera(numero));
    // Define a função raioEsfera que calcula o volume de uma esfera
    // com base no raio fornecido pelo usuário
    console.log(`O volume da esfera é igual a ${formula} portanto uma esfera de raio ${numero} tem um volume de ${formula}`);
    // Chama a função com o número inserido pelo usuário
    // e exibe o resultado no console