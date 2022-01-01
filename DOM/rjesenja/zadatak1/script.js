const fName = document.getElementsByName('fname');
const lName = document.getElementsByName('lname');
const form = document.getElementById('form1');

const paragraph = document.createElement('p');
paragraph.innerText = `Dobrodosli ${fName[0].getAttribute('value')} ${lName[0].getAttribute('value')}`;
paragraph.className = 'welcome_p';

form.prepend(paragraph);
