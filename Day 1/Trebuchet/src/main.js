const { 
    getFileData, 
    getDataLines,
    calculateSumOfCalibrationValuesFromLines
} = require('./utils');

const puzzlesInputsPathFile = '../data/puzzle-inputs.txt';

const puzzlesInputsData = getFileData( puzzlesInputsPathFile );

const puzzlesInputsLines = getDataLines( puzzlesInputsData );

const puzzlesInputsSum = calculateSumOfCalibrationValuesFromLines( puzzlesInputsLines );

console.log( `Final sum for puzzle-inputs file : ${puzzlesInputsSum}` );

const examplePathFile = '../data/example.txt';

const exampleData = getFileData( examplePathFile );

const exampleLines = getDataLines( exampleData );

const exampleSum = calculateSumOfCalibrationValuesFromLines( exampleLines );

console.log( `Final sum for example file : ${exampleSum}` );