//https://www.youtube.com/watch?v=ACP61O9f618&t=760s
const container = document.getElementById('container')

function creatDivs(num) {
    for(let i = 0;i < (num*num); i++) {
        const div = document.createElement('div') 
        container.appendChild(div).classList.add('box')
    }
}
creatDivs(16)