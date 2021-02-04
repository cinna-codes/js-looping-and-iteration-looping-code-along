function writeCards(names, event) {
    let cards = []
    for ( let i = 0; i < names.length; i++ ) {
      cards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return cards;
}

function countDown( positiveInteger ) {
    while ( positiveInteger > 0 ) {
        console.log( positiveInteger );
        positiveInteger -= 1;
    }
    console.log( positiveInteger );
}