// MILESTONE 1
// Per prima cosa, creiamo il markup statico: 
// costruiamo il container e inseriamo un'immagine grande al centro: 
// avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// Creare l'array con i path alle immagini 
const arrayImages = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]

// recuperare il container dove andranno inserite le immagini 
const imagesContainerDOMElement = document.querySelector('.item-elements')

// inserire le immagini dall'array nell'html 
// stabilire un ciclo FOR per creare un div.item per ogni immagine, in modo da inserirle nel container
for (let imageIndex = 0; imageIndex < arrayImages.length; imageIndex++) {
    //creare un elemento per ogni immagine
    const imageItem = document.createElement('div')
    // aggiungere la classe item agli elementi creato
    imageItem.classList.add('item')
    // inserire le immagini negli elementi
    imageItem.innerHTML = `<img src="./img/0${imageIndex + 1}.webp">`

    // appendere al container delle immagini gli elementi con le immagini create
    imagesContainerDOMElement.append(imageItem)
}


// fare in modo che solo la prima immagine abbia la classe active
// selezionare i container delle classi 
const imageItemsArray = document.getElementsByClassName('item')
// selezionare il container della prima immagine 
imageItemsArray[0].classList.add('active')


