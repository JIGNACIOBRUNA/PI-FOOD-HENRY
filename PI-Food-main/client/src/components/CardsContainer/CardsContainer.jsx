import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";


//debe tomar un array de recipe y por cada recipe renderizar un componente Card
const CardsContainer = ()=>{

    const recipes = useSelector(state => state.recipes)
  
    return(
        <div className={style.card}>
            {recipes.map(({id, name, image, summary, healthScore, stepByStep, diets})=>{
                return <Card 
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        summary={summary}
                        healthScore={healthScore}
                        stepByStep={stepByStep}
                        diets={diets.join(", ")}
                />
            })}
        </div>
    )
}

export default CardsContainer