/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

const contactList = [  
	{ 
		name: "Raquel Ervin", 
		phone: "+1 555 555-5555", 
		address: "123 front st, Unit #1, Dakota City",    
		email: "rocket@gmail.com",  
	},   
	{    
		name: "Contact Name",    
		phone: "Contact Phone",    
		address: "Contact Address",    
		email: "Contact Email",  
	}
];

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

function createSingleIndex(contact){
    const section = document.querySelector('.main')
    section.insertAdjacentHTML('beforeend', insertDOMIndex(contact.name))
}

function renderIndex(contactList){
    const section = document.querySelector('.main')
    for (var obj of contactList){
        section.insertAdjacentHTML('afterbegin', insertDOMIndex(obj.name))
    }
}

