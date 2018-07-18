import { transform } from './transform'

const textarea: HTMLTextAreaElement = document.querySelector('textarea')
const target: HTMLDivElement = document.querySelector('div#markdown-result')

function change ():void {
   transform(textarea.value, target)
   requestAnimationFrame(change)
}

change()
transform(textarea.value, target)
