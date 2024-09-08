document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const deleteButton = document.getElementById('delete-button');
    const choreInput = document.getElementById('chore-input');
    const choreList = document.getElementById('chore-list');

    // Load chores from local storage
    const loadChores = () => {
        const chores = JSON.parse(localStorage.getItem('chores')) || [];
        chores.forEach(choreText => {
            const choreItem = document.createElement('li');
            choreItem.innerHTML = `<span>${choreText}</span>`;
            choreList.appendChild(choreItem);
        });
    };

    // Save chores to local storage
    const saveChores = () => {
        const chores = [];
        choreList.querySelectorAll('li span').forEach(span => {
            chores.push(span.textContent);
        });
        localStorage.setItem('chores', JSON.stringify(chores));
    };

    addButton.addEventListener('click', () => {
        const choreText = choreInput.value.trim();
        if (choreText !== '') {
            const choreItem = document.createElement('li');
            choreItem.innerHTML = `<span>${choreText}</span>`;
            choreList.appendChild(choreItem);
            choreInput.value = ''; // Clear the input field
            saveChores(); // Save to local storage
        }
    });

    deleteButton.addEventListener('click', () => {
        choreList.innerHTML = ''; // Clear all chores
        localStorage.removeItem('chores'); // Clear local storage
    });

    // Load chores when the page is loaded
    loadChores();
});
