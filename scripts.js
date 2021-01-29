//step 1
let button = document.createElement('button');  //make button
let btnText = document.createTextNode('Add Square'); //name button
let containerDiv = document.createElement('div'); //make div
containerDiv.className = 'container';
button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(containerDiv);

let id = '0';  //box number and number that theoretically shows up in the box on mouseover

//adds and creates button to click to create boxes.
button.addEventListener('click', function () {
    let div = document.createElement('div');
    containerDiv.appendChild(div);
    div.style.backgroundColor = "black";
    div.style.height = '50px';
    div.style.width = '50px';
    div.className = 'squareDiv';
    div.setAttribute('id', id);
    id++;


    let innerDiv = document.createElement('div');
    innerDiv.textContent = id;
    innerDiv.style.display = "none";
    div.appendChild(innerDiv);

    div.addEventListener('mouseover', function () {  //on mouse hover, display i
        innerDiv.style.display = "block";
    })

    div.addEventListener('mouseout', function () {
        innerDiv.style.display = 'none';
    })

    div.addEventListener('click', function () {
        // random hex color generator (i.e. ##FF0000 is red)
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        div.style.backgroundColor = color;
    })

    div.addEventListener('dblclick', remove);  //should remove box on double click
})

// //declare colors for rando function
// let color = ['red', 'green', 'white', 'pink', 'blue', 'brown']

// function getRandomColor() {
//     let randomColor = color[Math.floor(math.random()*color.length)];
//     return randomColor;
// }

//removing all double clicked boxes according to the rules
function remove() {
    if (this.id % 2 === 0) {
        if (this.previousSibling) {
            this.previousSibling.remove();
        } else {
            alert("there's nothing there!")
        }
    } else {
        if (this.nextSibling) {
            this.nextSibling.remove();
        } else {
            alert("There's nothing there!");
        }
    }
}