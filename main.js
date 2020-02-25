// ************************************************************************
// Tips for completing lab

// Console log everything !!
// event
// .target
// .value
// .innerHTML
// .parentElement
// .lastElementChild
// .previousElementSibling
// .querySelector

// Write your functions and then pass them as the 2nd argument of the event listener
// function createItem(event) {
// do something
// }

// someButton.addEventListener('click', createItem);

// --------------------------------

// Header Section

// Create and append a div with id of page-container to the body element
let body = document.body;
let pageContainer = document.createElement('DIV');

pageContainer.id = "page-container";
pageContainer.style.height = "100vh";

body.appendChild(pageContainer);

// Create a container div with id of main-header for the header
let mainHeader = document.createElement('DIV');
mainHeader.id = "main-header";

// Create a 'header container' which will be the direct child of mainHeader. This div should have a class of 'container'. It will also be the direct parent for your heading h1 element. 
let headerContainer = document.createElement('DIV');
headerContainer.className = "headerContainer";

// Finally create an H1 element with the title 'Todo App'. Give it an id of 'header-title'
let headerTitle = document.createElement('H1');
headerTitle.innerHTML = "Todo App";
headerTitle.style.fontSize = "40px";

// Append headerTitle to headerContainer, headerContainer to mainHeader and mainHeader to pageContainer
headerContainer.appendChild(headerTitle);
mainHeader.appendChild(headerContainer);
pageContainer.appendChild(mainHeader);

// Add styles to header
mainHeader.style.backgroundColor = "green";
mainHeader.style.height = "100px";
mainHeader.style.color = "white";
mainHeader.style.paddingTop = "10px";


// Content Section 
// Create container for content section
let contentContainer = document.createElement('DIV');
contentContainer.id = "content-container";

contentContainer.style.width = '80%'
contentContainer.style.margin = "20px auto";
contentContainer.style.border = "1px solid #c4c4c4";
contentContainer.style.borderRadius = "5px";

pageContainer.appendChild(contentContainer);

// Create inner container for content section
let innerContainer = document.createElement('DIV');
innerContainer.className = "inner-container";
innerContainer.style.margin = "20px";

// Create add item card
let addItemCard = document.createElement('DIV');
addItemCard.className = "add-item";

// Create header for add item card
let addItemHeader = document.createElement('H2');
addItemHeader.innerHTML = "Add Todo";

// Create form for text input and submit button input
let form = document.createElement('FORM');
form.className = "form-inline";

// Create text input
let input = document.createElement('INPUT');
input.id = "itemToAdd";
input.type = "text";
input.className = "form-control";
input.placeholder = "Something to do..";

// Create submit button input
let submitBtn = document.createElement('INPUT');
submitBtn.className = "btn btn-primary";
submitBtn.id = "submit-button";
submitBtn.type = "button";
submitBtn.value = "Submit"
submitBtn.style.marginLeft = "5px";

// Append inputs to form
form.appendChild(input);
form.appendChild(submitBtn);

addItemCard.appendChild(addItemHeader);
addItemCard.appendChild(form);

innerContainer.appendChild(addItemCard);
contentContainer.appendChild(innerContainer);

// Items list card

let itemsCard = document.createElement('DIV');
itemsCard.className = "items-card";
innerContainer.appendChild(itemsCard);

// Items list card header element
let itemsCardHeader = document.createElement('H2');
itemsCardHeader.innerHTML = "Todos";
itemsCard.appendChild(itemsCardHeader);

// Items list card ul element
let listOfItems = document.createElement('UL');
listOfItems.id = "items";
listOfItems.className = "list-group";
itemsCard.appendChild(listOfItems);

// Create and append 4 li elements to ul
let itemNumber = 1;
function createListItems(num, name) {
  for (let i = 0; i < num; i++) {
    let item = document.createElement('li');
    item.className = "list-group-item";
    item.id = `todoListItem${itemNumber}`;
    let todoName = document.createElement('span');
    todoName.id = `todoSpan${itemNumber}`;
    if (name !== undefined) {
      todoName.innerHTML = name;
    } else {
      todoName.innerHTML = `Item ${itemNumber}`;
    }

    let deleteButton = document.createElement('BUTTON');
    deleteButton.className = "btn btn-danger btn-xs pull-right deleteButton";
    deleteButton.style.marginLeft = "5px";
    deleteButton.innerHTML = "x";
    deleteButton.id = `delete${itemNumber}`;

    let updateButton = document.createElement('BUTTON');
    updateButton.className = "btn btn-info btn-xs pull-right updateButton";
    updateButton.innerHTML = "&#x21bb";
    updateButton.id = `update${itemNumber}`;

    item.appendChild(deleteButton);
    item.appendChild(updateButton);
    item.appendChild(todoName);
    listOfItems.appendChild(item);
    itemNumber++;
  }
}
createListItems(4);


//// ***************** EVENTS *****************


///////////////////////////////////////////////////
//                  Create item                  //
///////////////////////////////////////////////////

// itemToAdd.addEventListener('keypress', (e) => {
//   console.log(e)
//   if (e.keyCode === 13) {
//     return false
//   }
//   }
// );

//preventdefault is a key of the event object that can be used to prevent page from refresh on 'Enter'

submitBtn.addEventListener('click', ()=>{
  sendListItems(1)
});

function sendListItems(num) {
  const newItemName = document.querySelector('#itemToAdd').value;
  document.querySelector('#itemToAdd').value = '';
  createListItems(num, `${newItemName}`);
}





///////////////////////////////////////////////////
//                  Delete item                  //
///////////////////////////////////////////////////

const deleteButton = document.getElementsByClassName('deleteButton');
for (i of deleteButton) {
  i.addEventListener('click', ({ target: t }) => {
    t.parentNode.remove()
  })
}

///////////////////////////////////////////////////
//                  Update item                  //
///////////////////////////////////////////////////

const updateButton = document.getElementsByClassName('updateButton');
for (i of updateButton) {
  i.addEventListener('click', ({ target: t }) => {
    const idNum = t.id.charAt(t.id.length - 1)
    document.getElementById(`todoSpan${idNum}`).innerHTML = prompt('Rename Todo Item.');
  })
}

///////////////////////////////////////////////////
//                   Save item                   //
///////////////////////////////////////////////////

//Not needed, functionality is included in the submitButton Eventlistener
