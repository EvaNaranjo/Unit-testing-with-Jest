// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro){
   
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}

const fromEuroToPound = function(valueInEuro){
    
    let valueInPound = valueInEuro * 0.8;    
    return valueInPound;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToPound, fromEuroToYen };