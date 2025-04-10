let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
//esta funcion crea un nuevo deck de cartas
    for (let i=2;i <=10;i++){
        for (let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos){ 
        for (let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck); // Barajar el deck usando lodash
    console.log(deck);
}

crearDeck();

/* :::::::::::REVISAR ESTA SECCION::::::::::::::::: */

// Esta funcion me permite tomar una carta del deck y eliminarla de este
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    //return deck.pop();
    let carta = deck.pop(); // Saco una carta del deck
    
    console.log(deck);
    console.log(carta);
    return carta;
}

pedirCarta(); // Ejemplo de uso de la funcion pedirCarta