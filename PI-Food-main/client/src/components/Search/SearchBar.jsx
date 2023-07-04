import React from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { useSelector } from "react-redux";



const SearchBar = () => {
  const recipes = useSelector((state) => state.recipes);

   return (
    <div className={style.results}>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipes.id}`} className={style.recipeName}>{recipe.name}</Link>
          <img src={recipe.image} alt= "" className={style.image}/>
          <h2 className={style.diet} >{recipe.diets}</h2>
        </div>
      ))}
    </div>
  );
};

export default SearchBar
