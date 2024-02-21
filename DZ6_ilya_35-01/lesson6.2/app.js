const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');

// Новые элементы для модальных окон
const deleteModal = document.getElementById('deleteModal');
const confirmDeleteButton = document.getElementById('confirmDelete');
const cancelDeleteButton = document.getElementById('cancelDelete');

const editModal = document.getElementById('editModal');
const confirmEditButton = document.getElementById('confirmEdit');
const cancelEditButton = document.getElementById('cancelEdit');

let currentTask = null; // Переменная для хранения текущей задачи

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Нельзя вводить пустоту или пробелы');
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'block_text');
    const divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'div_button');
    const text = document.createElement('h3');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');

    deleteButton.innerHTML = 'DELETE';
    editButton.innerHTML = 'EDIT';

    text.innerHTML = input.value;
    divButtons.append(deleteButton, editButton);
    div.append(text, divButtons);
    todoList.prepend(div);
    input.value = '';

    // Записываем текущую задачу
    currentTask = div;

    // Delete button logic
    deleteButton.addEventListener('click', () => {
        currentTask = div; // Записываем текущую задачу перед открытием модального окна
        deleteModal.style.display = 'block';
    });

    confirmDeleteButton.addEventListener('click', () => {
        if (currentTask) {
            currentTask.remove();
            deleteModal.style.display = 'none';
        }
    });

    cancelDeleteButton.addEventListener('click', () => {
        deleteModal.style.display = 'none';
    });

    // Edit button logic
    editButton.addEventListener('click', () => {
        editModal.style.display = 'block';
        document.getElementById('editInput').value = text.innerHTML;
    });

    confirmEditButton.addEventListener('click', () => {
        const newText = document.getElementById('editInput').value;
        text.innerHTML = newText;
        editModal.style.display = 'none';
    });

    cancelEditButton.addEventListener('click', () => {
        editModal.style.display = 'none';
    });

    text.addEventListener('click', () => text.classList.toggle('toggle'));
};

createButton.onclick = () => createTodo();

window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo();
    }
};
