const selectedNavBar = document.querySelector('.navigation__bar')
const profileNav = document.createElement('li');
profileNav.classList.add('navigation__links');
profileNav.innerHTML = 'Red Monkey';

selectedNavBar.appendChild(profileNav);
selectedNavBar.style.width = '60vw';

const thingsToDo = [
    {
      name: 'Cut the yard',
      priority: 'Not so bad',
    },
    {
      name: 'Teach Mandohort',
      priority: 'urgent!',
    },
    {
      name: 'Hang Shelves',
      priority: 'Some point this week',
    },
    {
      name: 'Drink Tea (or Beer)',
      priority: 'urgent!',
    }
];
const extraThingToDo = 
    {
      name: 'Write more things for the to do list!',
      priority: 'As soon as there are more things to do!',
    };


function showThingsToDo(todoArray) {
    const selectedToDo = document.querySelector('.todo__list');
    selectedToDo.innerHTML = '';
    todoArray.forEach(task => {
        const toDoItem = document.createElement(`li`);
        toDoItem.classList.add('todo__list-item');
        const toDoItemName = document.createElement('h4');
        toDoItemName.classList.add('todo__list-item');
        toDoItemName.innerText = task.name;
        const toDoItemPriority = document.createElement('p');
        toDoItemPriority.classList.add('todo__list-item');
        toDoItemPriority.innerText = task.priority;
        selectedToDo.appendChild(toDoItem);
        toDoItem.appendChild(toDoItemName);
        toDoItem.appendChild(toDoItemPriority);
    })
}

showThingsToDo(thingsToDo);
    
const todoLaunch = document.querySelector('.todo__launch');
todoLaunch.addEventListener('click', function() {
    thingsToDo.push(extraThingToDo);
    showThingsToDo(thingsToDo);
})