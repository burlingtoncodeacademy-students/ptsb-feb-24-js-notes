// console.log('connected')
/* 
! DOM
    - Document Object Model
    - Only through the browser

    Frame:
        - Document: HTML Page
            - "document" - is a global variable
        - Object: Elements and comments (node)
        - Model: Arrangement

* BOM
    - Browser Object Model
    - window variable that we gain access to
    - various methods available
*/

// console.log(window);
// alert('Warning!')
// prompt();
// confirm("Are you sure?")

// function askForStuff() {
//     prompt();
// }

// askForStuff();

// console.log(document);
// console.log(document.location.host);
// console.log(document.title);
document.title = "DOM Lesson Updated"
// console.log(document.title);

//* Creating our First Element
let h1 = document.createElement('h1');
// console.log(h1);

/* 
    Our variable now has access to our various properties.
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node.
        - textContent: returns the full text.
            ex:
                <p>Hello <b>World</b></p>
            ~ innerText would return just "Hello"
            ~ textContent would return "Hello World".
*/

h1.innerText = 'Creating my first DOM element!';
// console.log(h1);
/* 
    Chain of Events:
        1. Create our element.
        2. Apply our value(s).
        3. Place our element.
*/

document.body.appendChild(h1);

h1.style.color = 'blue';
h1.style.textAlign = 'center';
h1.style = `
    text-shadow: 2px 2px 2px yellow; 
    color: red;
    `;
h1.className = 'h1-class-name';
h1.id = 'set-id';

//! Finding Elements
/* 
* HTMLCollection
    - An array-like object.
    - Allows access to index, properties, and methods to help navigate and modify.
    - Does NOT allow to modify a group of elements all at once.
    - Can loop through it.
    - Can use .length property to get the size of the list.

    To Get Element
    - use array notation
    - use .item() method

    Accessing Multiple Elements requires these methods:
    - getElementsByTagName()
    - querySelectorAll()
    - getElementsByClassName()
*/

let li = document.getElementsByTagName('li');
// console.log(li);

let bathroom = li[0];
bathroom.style.color = 'white';

for(i of li) {
    i.style.color = 'lightgreen';
}

/* 
* .querySelector()
        - Grabs first instance of an element of null if nothing found.
        - can target by ID, Class, or Element
            - will need to append # for ID
            - will need to append . for Class
*/

let firstLi = document.querySelector('li');
// console.log(firstLi);

let toDoList = document.querySelector('#listTitle');
toDoList.style.textAlign = 'center';

/* 
*   .querySelectorAll()
        - Returns a static nodeList (an array) list of elements.
*/

// console.log(document.querySelectorAll('li'));

/* 
*   .getElementsByClassName('class');
*/

let liClass = document.getElementsByClassName('listItem');
// console.log(liClass);

//! Event Listeners
/* 
    Allow us to execute a function when an event occurs.

    .addEventListener('event', () => {})
        - DOM node method
        - requires an event to "listen for" or type and a callback function
*/

let btn = document.getElementById('submit');

// btn.addEventListener('click', (event) => {
//     console.log(event);
//     console.log('Someone clicked the button')
// })

/* 
* Adding an item to the list
    Steps:
        - Capture the input
        - Access the parent element
        - Create a new element (li)
        - Assign value to attributes
            - "text value from input field"
        - Append to parent element
*/

btn.addEventListener('click', addItem);
let input = document.getElementById('listInput')
let ul = document.querySelector('#ulToDo')

function addItem() {
    // console.log(input.value);

    // Create element
    let newItem = document.createElement('li');
    // Assign value to attributes
    newItem.textContent = input.value;
    newItem.style = `color: lightblue;`;
    // Append to parent element
    ul.appendChild(newItem);
}

//* Create Something New
//? Global Variables
let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');

const myList = [
    'red', 'blue', 'green', 'purple', 'yellow', 'orange'
]

//? Function to build and display
const buildTable = () => {
    myList.forEach((color, i) => {
        // console.log(color);

        //* Create elements
        let div = document.createElement('div');
        let title = document.createElement('h2');
        let p = document.createElement('p');

        //* Assign values
        title.textContent = color;
        title.style.color = color;
        p.innerHTML = `
            Item <u><b>${i}</b></u> in my list.
        `

        //* Set to Parent
        div.appendChild(title);
        div.appendChild(p);
        shellDiv.appendChild(div);
        // parentElement.appendChild(childElement)
    });

    shellDiv.style = `
        display: flex;
        align-items: space-around;
    `

}

//? Event Listener
buildBtn.addEventListener('click', buildTable);