const { 
    getFileData, 
    getDataLines,
    calculateSumOfCalibrationValuesFromLines
} = require('./utils');

const puzzlesInputsPathFile = '../data/puzzle-inputs.txt';

const data = getFileData( puzzlesInputsPathFile );

const lines = getDataLines( data );

const sum = calculateSumOfCalibrationValuesFromLines( lines );

console.log( `Final sum : ${sum}` );