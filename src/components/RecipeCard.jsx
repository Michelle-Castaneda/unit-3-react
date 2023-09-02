import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${props.recipe_id}`);
    }

    return (
   
        <div className="recipe-card">
            <h2 className='recipe-title'>{props.title}</h2>

        <div className="images-container">
        <img className="recipe-image" src={props.image1} alt="Image 1"/>
        <button className="recipe-btn" onClick={handleClick} >See More</button>
        </div>
        </div>
    )
}

export default RecipeCard;