import React from "react";
import "../Styles/RecipesPage.css";

function RecipesPage() {
  const recipes = [
    {
      id: 1,
      name: "Grilled Chicken",
      ingredients: ["Chicken", "Spices"],
      day: "Monday",
    },
    {
      id: 2,
      name: "Salmon Salad",
      ingredients: ["Salmon", "Mixed Greens", "Vinaigrette"],
      day: "Tuesday",
    },
    {
      id: 3,
      name: "Beef Stir Fry",
      ingredients: ["Beef", "Vegetables", "Soy Sauce"],
      day: "Wednesday",
    },
    {
      id: 4,
      name: "Vegetarian Pizza",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Vegetables"],
      day: "Thursday",
    },
    {
      id: 5,
      name: "Tomato Pasta",
      ingredients: ["Pasta", "Tomato Sauce", "Basil"],
      day: "Friday",
    },
    {
      id: 6,
      name: "Seafood Paella",
      ingredients: ["Rice", "Seafood", "Saffron"],
      day: "Saturday",
    },
    {
      id: 7,
      name: "Roast Chicken",
      ingredients: ["Chicken", "Herbs", "Potatoes"],
      day: "Sunday",
    },
  ];

  return (
    <div>
      <h2>Recipes</h2>
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipesPage;
