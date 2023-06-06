const { UUID, INTEGER } = require("sequelize");
const { v4: UUIDV4, validate } = require("uuid");
const { Recipes, Diets } = require("../db");
const { getRecipeById, createRecipe } = require("../controllers/recipeControllers");

const getRecipeHandler = async(req, res) =>{
    const { idRecipe } = req.params;
    const origin = isNaN(idRecipe) ? "DB" : "API" // si no es numero su origen es Db por el uuid
    try {
        const recipe = await getRecipeById(idRecipe, origin);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: "No se encontro la receta con el ID indicado" });
        
    }
//     const idRecipe = req.params.idRecipe;
//     // if(Number.isInteger(idRecipe)){
//     //     console.log("Es un id valido numerico");
//     // }else if(validate(idRecipe)){
//     //     console.log("Es un id valido UUID");
//     // }else{
//     //     console.log("id invalido");
//     //     return res.status(500).json({error: "id invalido"})
//     // }
//     // if(typeof idRecipe(INTEGER) || validate(idRecipe)){
//     //     console.log("el tipo del id es valido");

//     // }else{
//     //     return res.status(400).json({error: "el tipo de id es invalido se espera un numerico o uuid"});
//     // }
//     try {// findByPk la utilizamos para buscar un registro en una tabla de DB por primaryKey
//         const recipe = await Recipes.findByPk(idRecipe, { include: Diets});

//         if(!recipe){
//             return res.status(404).json({ mensaje: "Receta no encontrada"});
//         }
//         res.json(recipe);
//      } catch (error) {
//         res.status(500).json({ error: "Ocurrio un error al obtener el detalle de la receta"});  
//        // next(error)
// }
};

const getRecipeName = async (req, res) =>{
    const { name } = req.query;
    try {
       const recipeFromApi = await getRecipeFromAPI(); //obtengo las recetas de la api
       const recipeFromDB = await Recipes.findAll(); // obtengo recetas desde la DB
        // junto las recetas desde la DB y la APi. Las filtro verificando si las recetas incluyen el valor name y lo dejo en minuscula con toLowerCase
       const matchinRecipes = [...recipeFromApi, ...recipeFromDB]
       .filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase())); 

       if(matchinRecipes.length > 0){
        res.status(200).json(matchinRecipes);
        console.log(matchinRecipes);
       }else{
        res.status(404).send("Receta no encontrada");
       }
    } catch (error) {
        
       res.status(500).json({error: "No existe la receta"}) 
    }
    //res.status(200).send("Estoy en getName porfin");
};


const postRecipe = async (req, res) =>{
    try {
        const { id, name, image, summary, healthScore, stepByStep } = req.body;
        const newRecipe = await createRecipe(id, name, image, summary, healthScore, stepByStep)
        res.status(200).json(newRecipe);
    } catch (error) {
        //console.log(error)
        res.status(400).send("No se creo la nueva receta");
    }
    // try {
    //     const newRecipe = await Recipe.create({// creo la receta y la guardo en la DB
    //         id,
    //         name,
    //         image,
    //         summary,
    //         healthScore,
    //         setpByStep
    //     })
    //     const typeDiet = await Diet.findAll({ //utilizo el metodo findAll para buscar los tipos de dieta 
    //         where:{// los filtro por el array diet 
    //             name: diet 
    //         }
    //     })
    //     await newRecipe.addDiets(typeDiet);// con addDiet hago la relacion entre la receta creada y los tipos de dieta seleccionada 
    //     res.status(200).send("Receta creada correctamente")
    // } catch (error) {
    //     res.status(500).json({error: "No se creo la receta solictada"})
    // }
    // //res.status(200).send("estoy en post")
};

module.exports = {
    getRecipeHandler,
    getRecipeName,
    postRecipe
}