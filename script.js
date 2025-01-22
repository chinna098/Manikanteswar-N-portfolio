```javascript
// Function to change the name displayed
function changeName() {
    const nameElement = document.querySelector('.name');
    nameElement.textContent = 'New Name'; // Change 'New Name' to whatever you want
}

// Add an event listener to a button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Change Name';
    button.onclick = changeName; // Call changeName function on click
    document.body.appendChild(button); // Add button to the body
});
```