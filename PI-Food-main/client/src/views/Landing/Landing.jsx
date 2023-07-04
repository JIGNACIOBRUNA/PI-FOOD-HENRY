import style from "./Landing.module.css";

const Landing = () =>{
    return(
        <div>
        <h1 className={style.titulo}>FOOD</h1>
        <h2 className={style.texto}>Explora un festín de sabores. Desde platos tradicionales hasta creaciones innovadoras, nuestras recetas te llevarán a un viaje culinario inolvidable</h2>
        
        <div className={style.button}>
        <a href="/home" className="button">Home</a>
        </div>

        </div>
    )
}
export default Landing;