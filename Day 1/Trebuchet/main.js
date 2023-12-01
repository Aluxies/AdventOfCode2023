const fs = require('fs');

let data;

try {

    data = fs.readFileSync( 'puzzle-inputs.txt', 'utf8' );
    
} catch( e ) {

    console.log( 'Error:', e.stack );

};

const lines = data.split( '\n' );
let sum = 0;

for ( const line of lines ) {

    const characters = line.split( '' );
    const digits = characters.map( c => {

        if( isNaN( Number( c ) ) ) return c;
        else return Number( c );

    }).filter( c => typeof c === 'number' );

    const firtDigitNumber = digits[0];
    const lastDigitNumber = digits[digits.length - 1];
    const calibrationValueString = `${firtDigitNumber}${lastDigitNumber}`;

    const calibrationValueNumber = Number(calibrationValueString);

    sum += calibrationValueNumber;

};

console.log( `Final sum : ${sum}` );