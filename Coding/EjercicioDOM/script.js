console.log('Everything up and running!')

let paragraph = document.getElementById('paragraph');
console.log(paragraph);
let links = document.getElementsByClassName('link');
console.log(links);
let divs = document.getElementsByTagName('div');
console.log(divs);

let paragraphId = paragraph.getAttribute('id');
console.log(paragraphId);

let googleLink = document.getElementById("google-link");
googleLink.setAttribute('href','https://duckduckgo.com');
googleLink.setAttribute('target','blank')

paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraphuuu');

let parrafos = document.getElementsByTagName('p');
for(let i =0; i < parrafos.length; i++) {
    parrafos[i].removeAttribute('class')
}

let h2Element = document.createElement('h2');
h2Element.innerHTML = 'Soy un encabezado';

let body = document.getElementsByClassName