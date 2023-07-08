import React from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getRecipeName, changeCurrentPage } from "../../redux/actions";


const SearchBar = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState("");
  //nuevo
  // const recipes = useSelector((state) => state.recipes);

  const handleChangeName = (e) => {
      e.preventDefault()
      setRecipes(e.target.value);
      console.log('console.log1', e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(getRecipeName(recipes));
      // dispatch(changeCurrentPage(1));
      setRecipes('');
      // console.log("console.log3", setName);
  }
  console.log('console.log2', recipes)
  
  return(
    <div className={style.search}>
      <input type="text" placeholder="Search" value={recipes} onChange={e => handleChangeName(e)} ></input>
      <button className={style.button} type="submit" onClick={e => handleSubmit(e)}>Search</button>

    </div>
  )
  
  
  
  // const recipes = useSelector((state) => state.recipes);

  //  return (
  //   <div className={style.results}>
  //     {recipes.map((recipe) => (
  //       <div key={recipe.id}>
  //         <Link to={`/recipe/${recipes.id}`} className={style.recipeName}>{recipe.name}</Link>
  //         <img src={recipe.image} alt= "" className={style.image}/>
  //         <h2 className={style.diet} >{recipe.diets}</h2>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default SearchBar
