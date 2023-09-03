import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './homeComponents/HomeScreen.module.css';

function RecipeCard({ recipe }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  if (!recipe) {
    return null;
  }
  
  return (
    <div className={styles.recipe_card}>
      <div className={styles.recipe_img_container}>
        <img src={recipe.image_url} />
        {/* <img className="recipe-image" src={props.image1} alt="Image 1" /> */}
      </div>
      <h2>{recipe.recipe_name}</h2>
      <button className={styles.recipe_card_btn} onClick={handleClick}>
        See More
      </button>
    </div>
  );
}

export default RecipeCard;
