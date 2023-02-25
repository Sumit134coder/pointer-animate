let pointer = document.getElementById('pointer');

console.log(pointer , 'ges')

document.body.onpointermove = e => {
    const { clientX , clientY } = e

    console.log(clientX, clientY)

    // pointer.style.top = clientY + 'px'
    // pointer.style.left = clientX + 'px'

    pointer.animate({
        left :clientX + 'px',
        top: clientY + 'px'
    } , {
        duration : 3000,
        fill: "forwards"
    })

   
}