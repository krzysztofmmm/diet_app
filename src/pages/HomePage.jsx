import React, { useState, useEffect } from "react";
import "../Styles/HomePage.css"; // Ensure you have the CSS set up for this

function HomePage() {
  const recipes = [
    {
      id: 1,
      name: "Grilled Chicken",
      description: "Tender grilled chicken with a side of steamed vegetables.",
    },
    {
      id: 2,
      name: "Salmon Salad",
      description:
        "Freshly tossed greens topped with seared salmon and a sprinkle of herbs.",
    },
    {
      id: 3,
      name: "Vegetable Stir Fry",
      description:
        "A variety of fresh vegetables sautéed with soy sauce and ginger.",
    },
    {
      id: 4,
      name: "Beef Stew",
      description:
        "Slow-cooked beef stew with potatoes and carrots, perfect for cold evenings.",
    },
    {
      id: 5,
      name: " Spaghetti Carbonara",
      description:
        "Yolks, spahetii, guanciale and grana padano is all you need.",
    },
    {
      id: 6,
      name: "Ramen",
      description: "Slow-cooked meet broth with delicious pasta.",
    },
    {
      id: 7,
      name: "Kfc bucket",
      description: "Some chicken nuggies mmm.",
    },
  ];

  // Since we're showing multiple recipes, there's no need to select just one
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  useEffect(() => {
    // Here you might want to implement some logic to select featured recipes, for simplicity we're using all
    setFeaturedRecipes(recipes);
  }, []); // This effect runs once on mount

  return (
    <div>
      <h1>Welcome to Diet Planner</h1>
      <h2>Featured Recipes</h2>
      <div className="recipes-container">
        {featuredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            {/* <img
              src={recipe.imageUrl}
              alt={recipe.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
              }}
            /> */}
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
