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


};

module.exports = {
    getFileData,
    getDataLines
};