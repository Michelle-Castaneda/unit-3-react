import React, { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeContainer from "./RecipeContainer";
// import RecipeCard from "../../elements/RecipeCard";
// import { BiSearchAlt2 } from "react-icons/bi";


const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios
      .get(`https://recipes.devmountain.com/recipes`)
      .then((res) => {
        setRecipes(res.data); //save the fetched data to state
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching recipe", err);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
    </div>
  );
};

export default HomeScreen;

