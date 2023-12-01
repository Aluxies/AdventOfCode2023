const fs = require('fs');

let data;

try {

    data = fs.readFileSync( 'puzzle-inputs.txt', 'utf8' );

    console.log(data);
    
} catch( e ) {

    console.log( 'Error:', e.stack );

};