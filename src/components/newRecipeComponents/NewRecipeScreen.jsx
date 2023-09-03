import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import styles from "./NewRecipe.module.css";


const NewRecipeScreen = () => {
    console.log('Hello from NewRecipeScreen!')


    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

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
        axios
            .post("https://recipes.devmountain.com/recipes", values)
            .then((response) => {
                alert("Recipe submitted successfully!");
            })
            .catch((error) => {
                alert("Error submitting the recipe");
            });
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { name, quantity }]);
        setName("");
        setQuantity("");
    };

    const ingredientDisplay = ingredients.map((ing, index) => (
        <li>
            {ing.quantity} {ing.name}
        </li>
    ));

    const newForm = (formInfo) => {
      const { values, handleChange, handleSubmit } = formInfo;
 
    return (
         <form onSubmit={handleSubmit} className={styles.input_container}>
                        <div className={styles.name_image_container}>
                            <input
                                className={styles.inputs}
                                value={values.recipeName}
                                onChange={handleChange}
                                name="recipeName"
                                placeholder="Name"
                                type="text"
                            />
                            <input
                                className={styles.inputs}
                                value={values.imageURL}
                                onChange={handleChange}
                                name="imageURL"
                                placeholder="Image URL"
                                type="text"
                            />
                        </div>
                        <div className={styles.radio_container}>
                            <label className={styles.radio_btn_container}>
                                <input
                                    name="type"
                                    value="Cook"
                                    onChange={handleChange}
                                    type="radio"
                                />
                                Cook
                            </label>
                            <label className={styles.radio_btn_container}>
                                <input
                                    name="type"
                                    value="Bake"
                                    onChange={handleChange}
                                    type="radio"
                                />
                                Bake
                            </label>
                            <label className={styles.radio_btn_container}>
                                <input
                                    name="type"
                                    value="Drink"
                                    onChange={handleChange}
                                    type="radio"
                                />
                                Drink
                            </label>
                        </div>
                        <div className={styles.time_container}>
                            <input
                                className={styles.inputs}
                                value={values.prepTime}
                                onChange={handleChange}
                                name="prepTime"
                                placeholder="Prep Time"
                                type="number"
                            />
                            <input
                                className={styles.inputs}
                                value={values.cookTime}
                                onChange={handleChange}
                                name="cookTime"
                                placeholder="Cook Time"
                                type="number"
                            />
                            <input
                                className={styles.inputs}
                                value={values.serves}
                                onChange={handleChange}
                                name="serves"
                                placeholder="Serves"
                                type="number"
                            />
                        </div>
                        <div className={styles.ingredientsBox}>
                            <input
                                className={styles.inputs}
                                type="text"
                                value={name}
                                placeholder="Ingredient"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className={styles.inputs}
                                type="text"
                                value={quantity}
                                placeholder="Quantity"
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <button className={styles.addAnotherBtn} type="button" onClick={addIngredient}>
                                Add Another
                            </button>
                        </div>
                        {/* <h3>Added Ingredients:</h3> */}
                        <ul className={styles.ingredientList}>{ingredientDisplay}</ul>
                        <textarea
                            name="instructions"
                            placeholder="What are the instructions"
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit">Save</button>
                    </form>
                );
              };
                return(
                <section className={styles.newRecipe_container}>
            <h1 className={styles.newRecipe_name}>Tell us about your Recipe!</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {newForm}
            </Formik>
        </section>
    );
};

export default NewRecipeScreen;
