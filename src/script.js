// JavaScript code in your HTML or a separate script file
fetch('/api/menus') // Send a GET request to the server's API endpoint
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Process the data and dynamically update the page
    const menusContainer = document.getElementById('menus'); // Assuming you have a <div> with id="menus"
    
    // Loop through the menu data and create HTML elements
    data.forEach(menu => {
      const menuDiv = document.createElement('div');
      menuDiv.className = 'menu-item';
      menuDiv.innerHTML = `<h3>${menu.name}</h3><p>${menu.description}</p>`;
      menusContainer.appendChild(menuDiv);
    });
  })
  .catch(error => console.error('Error fetching menus:', error));

  
// JavaScript code in script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sample menu data (replace with data fetched from your server)
    const menus = [
        { name: 'Breakfast Menu', description: 'Delicious breakfast items' },
        { name: 'Lunch Menu', description: 'A variety of lunch options' },
        { name: 'Dinner Menu', description: 'Gourmet dinner selections' },
    ];

    const menuListContainer = document.getElementById('menu-list');

    menus.forEach(menu => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${menu.name}</h3>
            <p>${menu.description}</p>
        `;
        menuListContainer.appendChild(menuItem);
    });

    const recipeForm = document.getElementById('recipe-form');
    const recipeListContainer = document.getElementById('recipe-list');
    
    // Sample recipe data (replace with data fetched from your server)
    let recipes = [];

    // Function to display recipes
    function displayRecipes() {
        recipeListContainer.innerHTML = ''; // Clear existing recipes
        
        recipes.forEach((recipe, index) => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
                <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
            `;
            recipeListContainer.appendChild(recipeItem);
        });
    }

    // Handle recipe form submission
    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        // Add the new recipe to the recipes array (in a real project, you'd send it to the server)
        const newRecipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions,
        };

        recipes.push(newRecipe);
        displayRecipes();

        // Clear the form fields after submission
        recipeForm.reset();
    });

    // Display initial recipes
    displayRecipes();
});


