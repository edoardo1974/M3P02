    
    
    function raioEsfera(raio) {
        let volume = (4 / 3) * Math.PI * raio;
        return volume;
    }
    // This function calculates the volume of a sphere based on the radius provided by the user

    let numero = prompt("Inserisci un numero:");
    let formula = raioEsfera(numero);
    console.log('O volume da esfera é:'+ raioEsfera(numero));// This line calculates the volume of the sphere using the raioEsfera function and logs it to the console
    console.log(`O volume da esfera é igual a ${formula} portanto uma esfera de raio ${numero} tem um volume de ${formula}`);
    