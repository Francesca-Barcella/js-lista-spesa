/* 
TRACCIA
**Descrizione:**
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
**Consigli:**
Come posso ciclare su un array con il ciclo while?
let coding = true
while(coding) {
console.log('Buon divertimento e che la forza si con voi! ')
}
*/

// creare array con lista della spesa - (const)
// creare ciclo while - (while)
// stampare in pagina la lista della spesa


// creare array con lista della spesa - (const)
const shoppingList = [
    '250 g di mascarpone',
    '250 g di panna fresca liquida',
    '60 g di zucchero a velo',
    'pavesini',
    'Nutella',
    '150 g di caffè',
    '70 g di latte',
    'zucchero'
]
console.log(shoppingList);

// creare ciclo while - (while)
let i = 0;

while (i < shoppingList.length) {
    const listItem = shoppingList[i];
    console.log(listItem);
    i++
}

