import React, { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "../RecipeCard";
import { BiSearchAlt2 } from 'react-icons/bi';


const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title
      ? recipe.title.toLowerCase().includes(searchInput.toLowerCase())
      : false
  );

  const searchChangeHandler = (event) => {
    setSearchInput(event.target.value); //to retrieve the current value of the input
  };

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

      <span>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          placeholder="Search for a Recipe"
          type="text"
          value={searchInput}
          onChange={searchChangeHandler}
        />
      </span>

      <div className="images-container">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe_id}
            image={recipe.image}
            title={recipe.title}
            buttonCard={recipe.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
