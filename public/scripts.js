const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const recipeId = card.getAttribute("id");
        window.location.href = `/recipe?id=${recipeId}`

    })
}

const showHides = document.querySelectorAll('h4')

for (let i = 0; i < showHides.length; ++i) {

    showHides.item(i).addEventListener("click", function () {

        let selector = document.querySelectorAll(".topicContent")[i]

        console.log(showHides.item(i).innerHTML)
        if (showHides.item(i).innerHTML == 'ESCONDER') {

            showHides.item(i).innerHTML = 'MOSTRAR';
            selector.style.display = 'none'
            console.log('ESCONDEU')
        } else if (showHides.item(i).innerHTML == 'MOSTRAR') {

            showHides.item(i).innerHTML = 'ESCONDER';
            selector.style.display = 'block'
            console.log('MOSTROU')
        }

    })
}