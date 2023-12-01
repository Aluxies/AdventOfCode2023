const fs = require('fs');

let data;

try {

    data = fs.readFileSync( 'puzzle-inputs.txt', 'utf8' );
    
} catch( e ) {

    console.log( 'Error:', e.stack );

};

const lines = data.split('\n');

for ( const line of lines ) {

    console.log( line );

};