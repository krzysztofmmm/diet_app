import React from "react";
import "../Styles/MealsPage.css";

function MealsPage() {
  const meals = [
    { id: 1, day: "Monday", meal: "Grilled Chicken" },
    { id: 2, day: "Tuesday", meal: "Salmon Salad" },
    { id: 3, day: "Wednesday", meal: "Beef Stir Fry" },
    { id: 4, day: "Thursday", meal: "Vegetarian Pizza" },
    { id: 5, day: "Friday", meal: "Tomato Pasta" },
    { id: 6, day: "Saturday", meal: "Seafood Paella" },
    { id: 7, day: "Sunday", meal: "Roast Chicken" },
  ];

  return (
    <div>
      <h2>Weekly Meal Plan</h2>
      <table className="meal-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Meal</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal.id}>
              <td>{meal.day}</td>
              <td>{meal.meal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MealsPage;
