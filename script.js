// Selects the top navigation bar where we want to add content
const selectedNavBar = document.querySelector('.navigation__bar')
// Creates a new li element, class and value
const profileNav = document.createElement('li');
profileNav.classList.add('navigation__links');
profileNav.innerText = 'Profile';
// Attaches the newly created element to the nav bar
selectedNavBar.appendChild(profileNav);

// An array of To Do Tasks
const thingsToDo = [
    {
      name: 'Cut the yard',
      priority: 'Not so bad',
    },
    {
      name: 'Teach Mandohort',
      priority: 'Urgent!',
    },
    {
      name: 'Hang Shelves',
      priority: 'Some point this week',
    },
    {
      name: 'Drink Tea (or Beer)',
      priority: 'Urgent!',
    }
];

// An object with a new to do task, this could be generated by a form...
const extraThingToDo = 
    {
      name: 'Write more things for the to do list!',
      priority: 'As soon as there are more things to do!',
    };

// Declared function
function showThingsToDo(todoArray) {
    // Selects where you want content to be added
    const selectedToDo = document.querySelector('.todo__list');
    // Removes current content
    selectedToDo.innerHTML = '';
    // Begins looping over each index of the todoArray parameter
    todoArray.forEach(task => {
        // Creates a new li element and class
        const toDoItem = document.createElement(`li`);
        toDoItem.classList.add('todo__list-item');
        // Creates a new h4 element, class and text value
        const toDoItemName = document.createElement('h4');
        toDoItemName.classList.add('todo__name');
        toDoItemName.innerText = task.name;
        // Creates a new p element, class and text value
        const toDoItemPriority = document.createElement('p');
        toDoItemPriority.classList.add('todo__priority');
        // Adds an additional class with a modifier if task is urgent
        if(task.priority === 'Urgent!'){
            toDoItemPriority.classList.add('todo__priority--urgent')
        };
        toDoItemPriority.innerText = task.priority;
        // Attaches the elements created above to one another
        selectedToDo.appendChild(toDoItem);
        toDoItem.appendChild(toDoItemName);
        toDoItem.appendChild(toDoItemPriority);
    })
}
// Invokes the function on page load and passes in array as parameter
showThingsToDo(thingsToDo);

// Targets button on page and add's an click event listener
const todoLaunch = document.querySelector('.todo__launch');
todoLaunch.addEventListener('click', function() {
    // Pushes new task to array
    thingsToDo.push(extraThingToDo);
    // Invokes array
    showThingsToDo(thingsToDo);
})