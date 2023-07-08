import style from "./Card.module.css";
import "./Card.module.css";
import { Link } from "react-router-dom";


//debe mostrar la info de cada recipe mapeado, ademas darnos un link para ir al detalle 
const Card = (props, id, name, image, summary, stepByStep, diets) =>{
    return(
        <div className={style.contenedor}>
            <Link to={`/recipe/${props.id}`} className={style.recipeName}>{props.name}</Link>
            <img src={props.image} alt= "" className={style.image}/>
            <h2 className={style.diet} >{props.diets}</h2>
        </div>
    )
}

export default Card