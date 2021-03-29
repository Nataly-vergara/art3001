const draggables = document.querySelectorALL ('.draggable')
containers = document.querySelectorAll('.container')

draggables.array.forEach(draggable => { 
    draggable.addEventListner('dragstart', () => {
        draggable.classList.add('dragging')
    })
    
    draggable.addEventListner('dragend', () => {
        draggable.classList.remove ('dragging')
    })
})
containers.forEach(container => { 
    container.addEventListner('dragover', ()  => {.preventDefault()
        const draggable = document.querySelector ('dragging')
        container.appendChild(draggable) 
    })
})