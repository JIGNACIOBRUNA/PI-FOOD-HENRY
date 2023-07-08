import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import style from "../../components/Pagination/Pagination.module.css";
import { useEffect, useState } from "react"; //hook que nos ayuda a controlar las funcionalidades de la pagina 
import { useDispatch, useSelector } from "react-redux"; //
import { allRecipes, getRecipeName } from "../../redux/actions";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/Search/SearchBar"


const Home = () =>{
    const dispatch = useDispatch();

    const recipes = useSelector((state) => state.recipes)
    const page = useSelector(state => state.currentPage)
    // const recipe = useSelector((state) => state.recipe) 
    //nuevo
    // const filteredRecipes = useSelector((state) => state.recipeByName)
    // const[search, setSearch] = useState(false)
    // cambio 
    // useEffect(()=>{
    //     dispatch(allRecipes());
    // },[dispatch])

    //paginado
    const recipesPerPage = 10
    const lastRecipe = page * recipesPerPage // 1 * 9 = 9
    const firstRecipe = lastRecipe - recipesPerPage // 9 - 9 = 0
    const recipesPage = recipes.slice(firstRecipe, lastRecipe)


    //nuevo 
    useEffect( () => {
        if(!recipes.length) dispatch(allRecipes())
    },[])

    //nuevo
    // let displayedRecipes = search ? filteredRecipes : recipes;

    return(
        <div>
            <NavBar getRecipesName={getRecipeName}/>
            <h1>Home</h1>
            <button>Filter</button>
            <div className={style.Pagination}>
                <Pagination recipesPerPage = {recipesPerPage} recipes = {recipes.length} />
             </div>
            <div className={style.card}>
                {recipesPage?.map(props => {
                    return(
                    <Link to={`/recipe/${props.id}`} key={props.id}>
                        <div>
                            <Card
                                name={props.name} 
                                image= {props.image} 
                                diets={props.diets}
                                healthScore={props.healthScore}
                                id={props.id}
                            />
                        </div>
                    </Link>
                )})}
            </div>

        </div>
    )
}
export default Home