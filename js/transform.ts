import marked from 'marked'

export function transform (markdown: string, target: HTMLElement):void {
   const resultat = marked(markdown)
   target.innerHTML = resultat
}
   