function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
    addIngredients("Apple", "Orange", "Carrot");
  }
  
  makeJuice("medium");

  function makeJuiceWithIngredients(size) {
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
    }
  
    addIngredients("Apple", "Orange", "Carrot");
    addIngredients("Celery", "Kale", "Ginger");
    displayJuice();
  }
  
  makeJuiceWithIngredients("large");