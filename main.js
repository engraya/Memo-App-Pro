var form = document.getElementById("myForm");
var itemsCollection = document.getElementById("items");
var filterForm = document.getElementById("filterForm");

// Form action and Event Listener
form.addEventListener('submit', addItemFunction);

// delete/Remove Item
itemsCollection.addEventListener('click', removeItemFunction);

// Filter items event
filterForm.addEventListener("keyup", filterItemsFunction)

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\// 
// Add Item Function
function addItemFunction(e) {
    e.preventDefault();

    // Get Input Value
    let addedItem = document.getElementById("addedItem").value;

    // Ceate New list Element
    let newListItem = document.createElement("li");

    // Add cLASS TO NEW LIST iTEM
    newListItem.className = 'list-group-item';

    // Text Node of list Item
    newItemLIstTextNode = document.createTextNode(addedItem)

    // Add Text NODE TO iNPUT vALUE
    newListItem.appendChild(newItemLIstTextNode);

    // create delete button
    var deleteButton = document.createElement("button");
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // Text Node
     var deleteButtonTextNode = document.createTextNode('X');

     // aPPEND the textNode cHILD To dELETE button
     deleteButton.appendChild(deleteButtonTextNode);

     // APPEND DELETE bUTTON TO THE lIST iTEMS cOLLECTION

     newListItem.appendChild(deleteButton);

    // Append the new Item to the ul list group
    itemsCollection.appendChild(newListItem);
}

// Remove Item List Function
function removeItemFunction(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentElement;
            itemsCollection.removeChild(li);
        }
    }
}


// Filter ItemList Function
function filterItemsFunction(e) {
    // convert Text to lowerCase
    const textInputValue = e.target.value.toLowerCase();

    // gET iTEM lIST
    var items = itemsCollection.getElementsByTagName("li");

    //Convert to an Array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(textInputValue) != -1) {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}


