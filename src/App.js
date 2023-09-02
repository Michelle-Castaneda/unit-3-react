import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
//import RecipeCard from "./components/RecipeCard";


function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="new-recipe" element={<NewRecipeScreen />}/>
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      <Footer />
    </div>
  
  );
}

export default App;
