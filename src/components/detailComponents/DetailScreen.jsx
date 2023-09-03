import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './DetailScreen.module.css';

const DetailScreen = () => {  
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});

useEffect(() => {
  axios
  .get(`https://recipes.devmountain.com/recipes/${id}`)
  .then((res)=>{
    setRecipe(res.data);
  })
},[]);

//const instructions = recipe ? JSON.parse(recipe.instructions) : "";
let parsedInstructions
  try {
    parsedInstructions = JSON.parse(recipe.instructions)
  } catch (error) {
    parsedInstructions = recipe.instructions
  }

  return (
    <section>
    <div className={styles.header_image_container}>
        <div className={styles.recipeBox}></div>
      <img className={styles.image} src={recipe.image_url} />
      <span className={styles.recipe_title}>{recipe.recipe_name}</span>
      </div>
      
       <div className={styles.details_container}>
       <div className={styles.ingredients_container}>
        <h2>Recipe</h2>
      <p>Prep Time: {recipe.prep_time} minutes </p>
      <p>Cook Time: {recipe.cook_time}</p>
      <p>Serves: {recipe.serves}</p>

      <h2>Ingredients</h2>
        {recipe.ingredients && recipe.ingredients.map((item,index) => (
          <h4>{item.quantity}{item.ingredient} </h4>
        ))}
    </div>

    <div className={styles.instruction_container}>
      <h3 className={styles.ingHeader}>Instructions</h3>
      <p className={styles.inst_details}>{parsedInstructions}</p>
      </div>
</div>
    </section>
  );
};

export default DetailScreen;