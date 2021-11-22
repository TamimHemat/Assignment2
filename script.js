/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

function insertDOMIndex(contact) {
    return `
        <a href="page3.html"><div class="contact">${contact}</div></a>
    `
}

function cleanUpIndex(){
    const clean = document.querySelectorAll('div.contact')
    for (i=0; i<clean.length; i++){
        clean[i].remove()
    }
}

