import './style.css'
import { lyrics } from './lyrics'

const main = document.querySelector<HTMLDivElement>('#main')!

const audio = new Audio()

audio.src = "anobando.mp3"

function init() {
    audio.play()

    main.innerHTML = ""
    for (const lyricElement of lyrics) {
        main.innerHTML += `<div class="text-container">
            <h1>${lyricElement.kan}</h1>
            <h2>${lyricElement.rom}</h2>
            <h2>${lyricElement.eng}</h2>
        </div>`
    }
    
    document.querySelectorAll<HTMLDivElement>('.text-container').forEach((element, index) => {
        // appear when it's time for the current line
        setTimeout(() => {element.classList.add("active") }, lyrics[index].time)
        
        // disappear when it's time for the next line
        setTimeout(() => {element.classList.remove("active") }, lyrics[index+1].time)
    })
}

document.querySelector<HTMLButtonElement>('#initiate')!.onclick = init