const selectedNavBar = document.querySelector('.navigation__bar');

const profileLink = document.createElement('li');
profileLink.classList.add('navigation__links');
profileLink.innerText = 'Profile'
selectedNavBar.appendChild(profileLink);

selectedNavBar.style.width = '20vw';

const thingsToDo = [`Review material`, `Study`, `Exercise`, `Relax`]

function showThingsToDo(){
    const todoListContainer = document.querySelector('.todo__list');
    thingsToDo.forEach(todo => {
        const toDoItem = document.createElement('li');
        toDoItem.classList.add('todo__list-item');
        toDoItem.innerText = todo;
        todoListContainer.appendChild(toDoItem);
    });
}

const todoLaunch = document.querySelector('.todo__launch');
todoLaunch.addEventListener('click', function () {
    showThingsToDo()
})