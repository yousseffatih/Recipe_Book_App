const API_KEY = "d0aef524cfc14d6ba3f35bc68ab620b9"; 
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes)
{
      recipeListEl.innerHTML = "";
      recipes.forEach((recipe) => {
            const recipeItemEL = document.createElement("li");
            recipeItemEL.classList.add("recipe-item");
            recipeImageEl = document.createElement("img");
            recipeImageEl.src = recipe.image;
            recipeImageEl.alt = "Recipe Image";
            recipTitleEl = document.createElement("h2");
            recipTitleEl.innerText = recipe.title; 
            recipeIngredientsEl = document.createElement("p");
            recipeIngredientsEl.innerHTML = `
            <strong>Ingredients : </strong>
            ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
            `;

            recipLinkEl = document.createElement("a");
            recipLinkEl.href = recipe.sourceUrl; 
            recipLinkEl.innerText = "View Recipe";

            recipeItemEL.appendChild(recipeImageEl);
            recipeItemEL.appendChild(recipTitleEl);
            recipeItemEL.appendChild(recipeIngredientsEl); 
            recipeItemEL.appendChild(recipLinkEl);
            recipeListEl.appendChild(recipeItemEL);
      })
}

async function getRecipes(){
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`);
      const data = await response.json();
      return data.recipes;
}

async function init(){
      const recipes = await getRecipes();
      displayRecipes(recipes);
      console.log(recipes)
}

init();