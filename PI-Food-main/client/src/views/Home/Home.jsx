import  CardsContainer  from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react"; //hook que nos ayuda a controlar las funcionalidades de la pagina 
import { useDispatch, useSelector } from "react-redux"; //
import { allRecipes } from "../../redux/actions";
import "./Home.module.css";
import NavBar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Search/SearchBar"


const Home = () =>{
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes)
    // const recipe = useSelector((state) => state.recipe) 
    //nuevo
    const filteredRecipes = useSelector((state) => state.recipeByName)
    const[search, setSearch] = useState(false)

    useEffect(()=>{
        dispatch(allRecipes());
    },[dispatch])

    //nuevo
    let displayedRecipes = search ? filteredRecipes : recipes;

    return(
        <div>
            <NavBar/>
            {/* <SearchBar recipes={recipes} /> */}
        <h1>Home</h1>
        <button>Filter</button>
        <CardsContainer recipes = {displayedRecipes}/>
        </div>
    )
}
export default Home