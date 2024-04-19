import React, { useState } from "react";
import "../Styles/CalorieCounterPage.css";

function CalorieCounterPage() {
  // Predefined food items
  const initialItems = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Egg", calories: 78 },
    { id: 4, name: "Toast", calories: 128 },
    { id: 5, name: "Almonds ", calories: 164 },
    { id: 6, name: "Yogurt", calories: 59 },
    { id: 7, name: "Broccoli", calories: 31 },
    { id: 8, name: "Chicken Breast", calories: 165 },
    { id: 9, name: "Rice (1 cup)", calories: 205 },
    { id: 10, name: "Chocolate", calories: 208 },
  ];

  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState({ name: "", calories: "" });
  const [editItem, setEditItem] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  const handleAddItem = () => {
    if (!newItem.name || !newItem.calories) return;
    setItems([...items, { ...newItem, id: Date.now() }]);
    setNewItem({ name: "", calories: "" });
  };

  const handleUpdateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, name: editItem.name, calories: editItem.calories }
          : item
      )
    );
    setEditItem(null);
  };

  const handleEditClick = (item) => {
    setEditItem(item);
  };

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h2>Calorie Counter</h2>
      {editItem ? (
        <div>
          <input
            type="text"
            name="name"
            value={editItem.name}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="calories"
            value={editItem.calories}
            onChange={handleEditChange}
          />
          <button onClick={() => handleUpdateItem(editItem.id)}>Update</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter food item"
            value={newItem.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="calories"
            placeholder="Calories"
            value={newItem.calories}
            onChange={handleInputChange}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}
      <table className="calorie-table">
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Calories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.calories}</td>
              <td>
                <button
                  className="button"
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </button>
                <button
                  className="button"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Total Calories:{" "}
        {items.reduce((total, item) => total + Number(item.calories), 0)}
      </p>
    </div>
  );
}

export default CalorieCounterPage;
