//hook que nos ayuda a controlar las funcionalidades de la pagina 
import { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux"; //
import { detailRecipe } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

// const recipeDetails = useSelector(state => state.recipeDetails)
// const {id} = useParams();
// useEffect(()=>{
//     dispatch(detailRecipe(id));
// },[])

const Detail = () =>{
    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail)     
    const {id} = useParams();

    useEffect(()=>{
         dispatch(detailRecipe(id));
         },[id, dispatch])

    return(
        <div key={id}>
            <NavBar/>
        <h2>{detail.id}</h2>
        <h2>Name{detail.name}</h2>
        <img src={detail.image}/>
        <h2>Summary{detail.summary}</h2>
        <h2>healthScore{detail.healthScore}</h2>
        <h2>stepByStep{detail.stepByStep}</h2>
        </div>
    )
}
export default Detail;  