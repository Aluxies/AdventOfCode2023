const fs = require('fs');
const path = require('path');

function getFileData( filePath ) {

    const pathResolved = path.resolve(__dirname, filePath );

    let data;

    try {

        data = fs.readFileSync( pathResolved, 'utf8' );
        
    } catch( e ) {

        console.log( 'Error:', e.stack );

    };

    return data;

};

function getDataLines( data ) {

    const lines = data.split( '\n' );

    return lines;

};

function calculateSumOfCalibrationValuesFromLines( lines ) {

    let sum = 0;

    for ( const line of lines ) {

        const characters = line.split( '' ).filter( c => c !== '\r' );

        console.log( `characters : ${JSON.stringify(characters)}` );

        const digits = characters.map( c => {
    
            if( isNaN( Number( c ) ) ) return c;
            else return Number( c );
    
        }).filter( c => typeof c === 'number' );

        console.log( `digits : ${digits}` );
    
        const firtDigitNumber = digits[0];
        const lastDigitNumber = digits[digits.length - 1];
        const calibrationValueString = `${firtDigitNumber}${lastDigitNumber}`;
    
        const calibrationValueNumber = Number(calibrationValueString);

        console.log( calibrationValueNumber );
    
        sum += calibrationValueNumber;
    
    };

    return sum;

}

module.exports = {
    getFileData,
    getDataLines,
    calculateSumOfCalibrationValuesFromLines
};