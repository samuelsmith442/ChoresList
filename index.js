document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const choreInput = document.getElementById('chore-input');
    const choreList = document.getElementById('chore-list');

    // Function to save chores to localStorage
    function saveChores() {
        const chores = [];
        // Collect all chore items from the list
        choreList.querySelectorAll('li').forEach(choreItem => {
            chores.push(choreItem.textContent);
        });
        // Save the chores array to localStorage as a JSON string
        localStorage.setItem('chores', JSON.stringify(chores));
    }

    // Function to load chores from localStorage
    function loadChores() {
        // Retrieve the chores from localStorage and parse the JSON string
        const chores = JSON.parse(localStorage.getItem('chores')) || [];
        // Add each chore to the list
        chores.forEach(choreText => {
            addChoreToList(choreText);
        });
    }

    // Function to add a chore to the list
    function addChoreToList(choreText) {
        const choreItem = document.createElement('li');
        choreItem.innerHTML = `<span>${choreText}</span>`;
        choreList.appendChild(choreItem);

        // Add click event listener to the new chore item
        choreItem.addEventListener('click', () => {
            choreItem.remove(); // Remove the clicked <li> element
            saveChores(); // Save the updated list to localStorage
        });
    }

    // Event listener for the add button
    addButton.addEventListener('click', () => {
        const choreText = choreInput.value.trim();
        if (choreText !== '') {
            addChoreToList(choreText); // Add the new chore to the list
            choreInput.value = ''; // Clear the input field
            saveChores(); // Save the updated list to localStorage
        }
    });

    // Load chores when the page is loaded
    loadChores();
});
