//step 1
let button = document.createElement('button');  //make button
let btnText = document.createTextNode('Add Square'); //name button
let containerDiv = document.createElement('div'); //make div
button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(containerDiv);

button.addEventListener('click', function (){
    let div = document.createElement('div');
    containerDiv.appendChild(div);
    div.style.backgroundColor = "black";





})