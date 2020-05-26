const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

// Form submit listener
form.addEventListener('submit', addItem);
// Item list delete button listener
itemList.addEventListener('click', removeItem);
// Item filter
filter.addEventListener('keyup', filterItems);

// Function for item adding
function addItem(event){
    // Prevent default submit form action
    event.preventDefault();
    // Get input value
    const newItem = document.getElementById('item').value;

    // Create new li element with class
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button & append it to list
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);

    // Add it to the list of items
    itemList.appendChild(li);
}

function removeItem(event){
    if(event.target.classList.contains('delete')){
        event.target.parentNode.remove();
    }
}

function filterItems(event){
    //Convert input text to lowercase
    const text = document.getElementById('filter').value.toLowerCase();
    //Get list items
    const items = itemList.getElementsByTagName('li');
    // HTMLCollection --> Array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}
