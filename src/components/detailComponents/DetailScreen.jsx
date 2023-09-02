import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetailScreen = () => {  
  const [recipe, setRecipe] = useState(null);
  const {id} = useParams();

useEffect(() => {
  axios
  .get(`https://recipes.devmountain.com/recipes/${id}`)
  .then((res)=>{
    setRecipe(res.data);
  })
},[]);

  return (
    <section>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
    </section>
  );
};

export default DetailScreen;
