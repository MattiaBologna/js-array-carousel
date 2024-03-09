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

    // Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. 
    // Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
    // Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

    // recuperare l'elemento thumbnail dall'html
    const thumbnailDOMElement = document.getElementById('thumbnail') 

    // inserire tutte le immagini nella thumbnail
    thumbnailDOMElement.innerHTML += `<img src="./img/0${imageIndex + 1}.webp" class="thumb">`
}


// fare in modo che solo la prima immagine abbia la classe active
// selezionare i container delle classi 
const imageItemsArray = document.getElementsByClassName('item')
// selezionare il container della prima immagine 
imageItemsArray[0].classList.add('active')

// fare in modo che solo la prima thumb abbia la classe active
// selezionare i container delle classi thumb
const thumbItemsArray = document.getElementsByClassName('thumb')
// selezionare il container della prima immagine 
thumbItemsArray[0].classList.add('active')


// recuperare gli elementi delle frecce 
const previousArrow = document.getElementById('previous');
const nextArrow = document.getElementById('next');

// definire l'indice dell'immagine attiva 
let activeImageIndex = 0

// aggiungere un event listener alla nextArrow per passare all'immagine successiva
nextArrow.addEventListener('click', function() {
    // rimuovere classe active dalla prima immagine 
    imageItemsArray[activeImageIndex].classList.remove('active')
    thumbItemsArray[activeImageIndex].classList.remove('active')

    //aumentare l'index dell'immagine attiva 
    activeImageIndex += 1

    // quando le immagini arrivano alla fine, torna alla prima
    if (activeImageIndex > 4) {
        activeImageIndex = 0
    }

    //mettere la classe active alla seconda immagine 
    imageItemsArray[activeImageIndex].classList.add('active')
    thumbItemsArray[activeImageIndex].classList.add('active')
})

// aggiungere un event listener alla previousArrow per passare all'immagine precedente
previousArrow.addEventListener('click', function() {
    // rimuovere classe active dalla prima immagine 
    imageItemsArray[activeImageIndex].classList.remove('active')
    thumbItemsArray[activeImageIndex].classList.remove('active')

    //aumentare l'index dell'immagine attiva 
    activeImageIndex -= 1

    // quando le immagini arrivano alla fine, torna all'ultima
    if (activeImageIndex < 0) {
        activeImageIndex = 4
    }

    //mettere la classe active alla seconda immagine 
    imageItemsArray[activeImageIndex].classList.add('active')
    thumbItemsArray[activeImageIndex].classList.add('active')
})






