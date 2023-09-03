import React, { useState } from "react";
import styles from "./HomeScreen.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from '../RecipeCard';


const RecipeContainer = ({ recipes }) => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    let title = recipe.recipe_name.toLowerCase();
    return title.includes(search.toLowerCase());
  });

  const recipeCards = filteredRecipes.map((recipe) => {
    return <RecipeCard recipe={recipe}/>
  });

  const searchChangeHandler = (event) => {
    setSearch(event.target.value); 
  };

  return (
    <section className={styles.recipe_section}>
      <span className={styles.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          placeholder="Search for a Recipe"
          type="text"
          value={search}
          onChange={searchChangeHandler}
        />
      </span>


      <div className={styles.recipe_container}>
        {recipeCards}
      </div>
    </section>
  );
};

export default RecipeContainer;
