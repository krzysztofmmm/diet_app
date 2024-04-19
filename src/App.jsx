import React, { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import MealsPage from "./pages/MealsPage";
import CalorieCounterPage from "./pages/CalorieCounterPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "recipes":
        return <RecipesPage />;
      case "meals":
        return <MealsPage />;
      case "calories":
        return <CalorieCounterPage />;
      default:
        return <HomePage />;
    }
  };

  return <Layout onNavigate={handleNavigation}>{renderPage()}</Layout>;
}

export default App;
