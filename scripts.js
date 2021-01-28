//step 1
let button = document.createElement('button');  //make button
let btnText = document.createTextNode('Add Square'); //name button
let containerDiv = document.createElement('div'); //make div
containerDiv.className = 'container';
button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(containerDiv);


let id = '0';
button.addEventListener('click', function (){
    let div = document.createElement('div');
    containerDiv.appendChild(div);
    div.style.backgroundColor = "black";
    div.style.height = '50px';
    div.style.width = '50px';
    div.className = 'squareDiv';
    div.setAttribute('id', id);
    id++;


    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);
    let divText = document.createTextNode(id); //on mouse hover, display i
    innerDiv.appendChild(divText);
    
    div.addEventListener ('mouseover', function() {
        div.appendChild(divText);
    })

    div.addEventListener('mouseout', function() {
        let divText = ''; //on mouse out, no display in box
    })

    div.addEventListener('click', function() {
        let randomColor = getRandomColor();
        div.style.backgroundColor = randomColor; //on click, change color to random color
    })

    div.addEventListener('dblclick', remove);  //should remove box on double click

})

let color = ['red', 'green', 'white', 'pink', 'blue', 'brown']

function getRandomColor() {
    let randomColor = color[Math.floor(math.random()*color.length)];
    return randomColor;
}

function remove() {
    if(this.id %2 ===0){
        if (this.nextSibling){
            this.nextSibling.remove();
        } else {
            alert("there's nothing there!")
        }
    } else {
        if(this.previousSibling){
            this.previousSibling.remove();
        } else {
            alert("There's nothing there!");
        }
    }
}