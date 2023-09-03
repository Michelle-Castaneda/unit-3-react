import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import styles from "./NewRecipe.module.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]); //setIngredients to the previous values, add an object that contains both name and quantity.
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);

    axios
      .post("https://recipes.devmountain.com/recipes", values)
      .then((response) => {
        console.log(response.data);
        alert("Recipe submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting the recipe", error);
        alert("Error submitting the recipe");
      });
  };

  const ingredientDisplay = ingredients.map((ing, index) => {
    return (
      <li key={index}>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <input
                type="text"
                name="recipeName"
                placeholder="Recipe Name"
                onChange={handleChange}
                value={values.recipeName}
              />
              <input
                type="text"
                name="imageURL"
                placeholder="Image URL"
                onChange={handleChange}
                value={values.imageURL}
              />
              <input
                type="number"
                name="prepTime"
                placeholder="Prep Time (in minutes)"
                onChange={handleChange}
                value={values.prepTime}
              />
              <input
                type="number"
                name="cookTime"
                placeholder="Cook Time (in minutes)"
                onChange={handleChange}
                value={values.cookTime}
              />
              <input
                type="number"
                name="serves"
                placeholder="Serves (number of people)"
                onChange={handleChange}
                value={values.serves}
              />
            </div>

            <div className="ingredients">
              <input
                type="text"
                name="ingredient1"
                placeholder="Ingredient"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="quantity1"
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button type="button" onClick={addIngredient}>
                Add Ingredient
              </button>
            </div>
            <h3>Added Ingredients:</h3>
    <ul className={styles.ingredientList}>
      {ingredientDisplay}
    </ul>
            <div className="cooking-method">
              <label>
                <input
                  type="radio"
                  name="cookingMethod"
                  value="Cook"
                  onChange={handleChange}
                />
                Cook
              </label>
              <label>
                <input
                  type="radio"
                  name="cookingMethod"
                  value="Bake"
                  onChange={handleChange}
                />
                Bake
              </label>
              <label>
                <input
                  type="radio"
                  name="cookingMethod"
                  value="Drink"
                  onChange={handleChange}
                />
                Drink
              </label>
            </div>

            <textarea
              name="instructions"
              placeholder="Instructions"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Submit Recipe</button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
