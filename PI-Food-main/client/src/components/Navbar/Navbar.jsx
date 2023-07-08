import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getRecipeName, changeCurrentPage } from "../../redux/actions";
import SearchBar from "../Search/SearchBar";



const NavBar = (props) => {
    // const dispatch = useDispatch();
    // const [recipes, setRecipes] = useState("");
    // //nuevo
    // // const recipes = useSelector((state) => state.recipes);

    // const handleChangeName = (e) => {
    //     e.preventDefault()
    //     setRecipes(e.target.value);
    //     console.log('console.log1', e.target.value)
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(getRecipeName(recipes));
    //     // dispatch(changeCurrentPage(1));
    //     // setName('');
    //     // console.log("console.log3", setName);
    // }
    // console.log('console.log2', recipes)

    //metodo de filtrado
    // let results = []
    // if (!name) {
    //     results = []
    // } else {
    //     results = recipes.filter((dato) => dato.name.toLowerCase().includes(name.toLocaleLowerCase()))
    //     console.log(results);
    // }

    return (
        <nav className={style.navbar}>
            <div className={style.logo}>
                <Link to="/">
                    <img src={logo} alt="Logo" /></Link>
            </div>
            <div className={style.links}>
                <Link to="/home">HOME</Link>
                <Link to="/create">FORM</Link>
                <Link to="/recipe/:id">DETAIL</Link>
            </div>
            {/* <div className={style.search}>
                <input type="text" placeholder="Search" value={recipes} onChange={e => handleChangeName(e)} ></input>
                <button className={style.button} type="submit" onClick={e => handleSubmit(e)}>Search</button>
               
            </div> */}
           <SearchBar onSearch ={props.onSearch}/>
        </nav>
    )
}
export default NavBar;

// import React from "react";
// import { Link, Redirect } from "react-router-dom";
// import style from "./NavBar.module.css";
// import logo from "./logo.png";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { getRecipeName, allRecipes } from "../../redux/actions";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// const dispatch = useDispatch();
// const recipes = useSelector((state) => state.recipes);
// const [name, setName] = useState('');

// const handleChangeRecipe = (e) => {
//   setName(e.target.value);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   dispatch(filterRecipes(name));
// };

// useEffect(() => {
//   if (name === '') {
//     // Si no hay ninguna búsqueda, mostrar todas las recetas
//     dispatch(allRecipes());
//   } else {
//     // Realizar la búsqueda con el nombre especificado
//     dispatch(filterRecipes(name));
//   }
// }, [dispatch, name]);

// const filteredRecipes = recipes.filter((recipe) =>
//   recipe.name.toLowerCase().includes(name.toLowerCase())
// );
// const NavBar = () =>{

// return (
//   <nav className={style.navbar}>
//              <div className={style.logo}>
//                  <Link to="/">
//                      <img src={logo} alt="Logo"/></Link>
//              </div>
//              <div className={style.links}>
//              <Link to="/home">HOME</Link>
//              <Link to="/create">FORM</Link>
//              <Link to="/recipe/:id">DETAIL</Link>
//              </div>
//     <div className={style.search}>
//       <input
//         type="text"
//         placeholder="Search"
//         value={name}
//         onChange={handleChangeRecipe}
//       ></input>
//       <button className={style.button} type="submit" onClick={handleSubmit}>
//         Search
//       </button>
//     </div>
//   </nav>
// )};

// export default NavBar;