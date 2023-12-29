// Select the form and fruits list from the HTML
const form = document.querySelector('form');
const fruitsList = document.querySelector('.fruits');
// Event listener for form submission
form.addEventListener('submit', function(event) {
event.preventDefault();
    // Get the input value
  const fruitToAdd = document.getElementById('fruit-to-add').value;
  const fruitToEDIT = document.getElementById('fruit-to-add').value;
  // Create a new <li> element with "Delete" and "Edit" buttons
  const newLi = document.createElement('li');
  newLi.innerHTML = `${fruitToAdd}<button class="delete-btn">x</button>`;
  newLi.innerHTML = `${fruitToAdd}<button class="edit-btn">Edit</button>`;
  newLi.className = 'fruit';
  // Append the new <li> element to the fruits list
  const fruits = document.getElementsByClassName('fruit');
   for(let i=0;i<fruits.length;i++){
    const fruit =fruits[i];
    const editbtn = document.createElement('button');
    editbtn.className='edit-btn';
    editbtn.innerHTML='Edit';
    fruit.appendChild(editbtn);
}
  fruitsList.appendChild(newLi);
});

// Event listener for clicks on the fruits list
fruitsList.addEventListener('click', function (event) {
  // Check if the clicked element has the class "delete-btn"
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruitsList.removeChild(fruitToDelete);
  }
  // Check if the clicked element has the class "edit-btn"
  else if (event.target.classList.contains('edit-btn')) {
    // Handle "Edit" button click if needed (you can prompt for input or perform other actions)
    console.log('Edit button clicked');
  }
});
